import React, { useEffect, useRef, useState } from 'react'
import ChatNowModal from './ChatNowModal'
import LiveChatWindow from './LiveChatWindow'
import RejectionModal from './RejectionModal'
import { buildApiUrl, buildWsUrl } from '../lib/api'
import chatbotAvatar from '../assets/chatbot-profile.jpg'

type Suggestion = {
  text: string
  type: string
  category: string
  action: string
}

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
  suggestions?: Suggestion[]
  timestamp?: Date
}

const getFaqIcon = (text: string): string => {
  const t = text.toLowerCase()
  if (t.includes('service') || t.includes('offer')) return '💼'
  if (t.includes('start') || t.includes('begin') || t.includes('how')) return '🚀'
  if (t.includes('pric') || t.includes('cost') || t.includes('plan')) return '💰'
  if (t.includes('contact') || t.includes('support') || t.includes('help')) return '🎧'
  if (t.includes('about') || t.includes('who')) return 'ℹ️'
  if (t.includes('ticket') || t.includes('issue')) return '🎫'
  if (t.includes('live') || t.includes('chat') || t.includes('agent')) return '💬'
  return '✨'
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get random items from array
const getRandomItems = <T,>(array: T[], count: number): T[] => {
  if (array.length <= count) return shuffleArray(array)
  return shuffleArray(array).slice(0, count)
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [typingSuggestions, setTypingSuggestions] = useState<string[]>([])
  const [showTypingSuggestions, setShowTypingSuggestions] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [faqSuggestions, setFaqSuggestions] = useState<Suggestion[]>([])
  const [allFaqSuggestions, setAllFaqSuggestions] = useState<Suggestion[]>([])
  const [ticketMode, setTicketMode] = useState(false)
  const [ticketStep, setTicketStep] = useState(0)
  const [ticketData, setTicketData] = useState({ firstName: '', lastName: '', email: '', phone: '', query: '' })
  const [ticketLoading, setTicketLoading] = useState(false)
  const [showChatNowModal, setShowChatNowModal] = useState(false)
  const [liveChatSession, setLiveChatSession] = useState<{ sessionId: number; userId: string; supportUserId: number; userName?: string } | null>(null)
  const [wsConnection, setWsConnection] = useState<WebSocket | null>(null)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const [showRejectionModal, setShowRejectionModal] = useState(false)
  const [rejectionMessage, setRejectionMessage] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const popupTimeoutRef = useRef<number | null>(null)
  const animationTimeoutRef = useRef<number | null>(null)
  const refreshIntervalRef = useRef<number | null>(null)

  const normalizeQuestion = (text: string) => text.trim().toLowerCase().replace(/\s+/g, ' ')

  const getFilteredSuggestions = (suggestions: Suggestion[], recentQuestion?: string) => {
    const recent = recentQuestion ? normalizeQuestion(recentQuestion) : ''
    const seen = new Set<string>()
    const filtered = suggestions.filter(s => {
      const n = normalizeQuestion(s.text)
      if (!n || seen.has(n)) return false
      seen.add(n)
      return n !== recent
    })
    
    console.log('[ChatWidget] Filtered suggestions for response:', {
      originalCount: suggestions.length,
      filteredCount: filtered.length,
      recentQuestion: recentQuestion || 'none',
      suggestions: filtered.map(s => ({ text: s.text, action: s.action, type: s.type }))
    })
    
    return filtered
  }

  // Refresh FAQ suggestions with random selection
  const refreshRandomFaqSuggestions = () => {
    if (allFaqSuggestions.length === 0) return
    
    // Get 4 random questions from all FAQs
    const randomQuestions = getRandomItems(allFaqSuggestions, 4)
    
    console.log('[ChatWidget] 🔄 Refreshing random FAQ questions:', {
      totalAvailable: allFaqSuggestions.length,
      selectedCount: randomQuestions.length,
      selectedQuestions: randomQuestions.map((q, i) => ({
        position: i + 1,
        text: q.text,
        action: q.action
      })),
      timestamp: new Date().toISOString()
    })
    
    setFaqSuggestions(randomQuestions)
  }

  // Start automatic refresh interval (every 30 seconds)
  const startAutoRefresh = () => {
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current)
    }
    
    refreshIntervalRef.current = setInterval(() => {
      // Refresh FAQs regardless of message count, but only if chat is open
      if (open) {
        console.log('[ChatWidget] Auto-refreshing FAQ questions...')
        refreshRandomFaqSuggestions()
      }
    }, 30000) as unknown as number
  }

  // Stop auto refresh
  const stopAutoRefresh = () => {
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current)
      refreshIntervalRef.current = null
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupMessage('How may I help you?')
      setShowPopup(true)
      popupTimeoutRef.current = setTimeout(() => setShowPopup(false), 5000)
    }, 3000)
    return () => { clearTimeout(timer); if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current) }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      animationTimeoutRef.current = setTimeout(() => setIsAnimating(false), 2000)
    }, 10000)
    return () => { clearInterval(interval); if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current) }
  }, [])

  // Handle auto refresh when chat opens/closes
  useEffect(() => {
    if (open) {
      // Refresh FAQs immediately when chat opens
      refreshRandomFaqSuggestions()
      // Start auto-refresh interval
      startAutoRefresh()
    } else {
      // Stop auto-refresh when chat closes
      stopAutoRefresh()
    }
    
    return () => {
      stopAutoRefresh()
    }
  }, [open, allFaqSuggestions.length])

  useEffect(() => {
    const onTicket = () => setShowRejectionModal(false)
    const onChat = () => { setShowRejectionModal(false); setShowChatNowModal(true) }
    window.addEventListener('openTicketModal', onTicket)
    window.addEventListener('openChatModal', onChat)
    return () => { window.removeEventListener('openTicketModal', onTicket); window.removeEventListener('openChatModal', onChat) }
  }, [])

  useEffect(() => {
    if (currentUserId && !wsConnection) {
      const ws = new WebSocket(buildWsUrl(`/chat/ws/${currentUserId}`))
      ws.onopen = () => setWsConnection(ws)
      ws.onmessage = event => {
        const msg = JSON.parse(event.data)
        if (msg.type === 'chat_accepted') {
          setLiveChatSession({ sessionId: msg.data.session_id, userId: currentUserId, supportUserId: msg.data.support_user_id || 1, userName: msg.data.user_name || 'User' })
          setShowChatNowModal(false)
        } else if (msg.type === 'chat_rejected') {
          setRejectionMessage(msg.data.message || 'Your chat request has been rejected. Please try again later.')
          setShowRejectionModal(true); setShowChatNowModal(false)
        } else if (msg.type === 'request_timeout') {
          setRejectionMessage('Your chat request has timed out. Please try again later.')
          setShowRejectionModal(true); setShowChatNowModal(false)
        }
      }
      ws.onclose = () => setWsConnection(null)
      ws.onerror = () => setWsConnection(null)
    }
    return () => { if (wsConnection) { wsConnection.close(); setWsConnection(null) } }
  }, [currentUserId, wsConnection])

  useEffect(() => { if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight }, [messages, isTyping])
  useEffect(() => { fetchFaqSuggestions() }, [])

  const formatTime = (date: Date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    
    console.log('[ChatWidget] User sent message:', { message: input.trim(), timestamp: new Date().toISOString() })
    
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input.trim(), timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    const userInput = input.trim()
    setInput(''); setTypingSuggestions([]); setShowTypingSuggestions(false); setSelectedSuggestionIndex(-1)
    setLoading(true); setIsTyping(true); setShowSuggestions(false)
    if (ticketMode) {
      const handled = handleTicketResponse(userInput)
      if (handled) { setLoading(false); setIsTyping(false); return }
    }
    try {
      const response = await fetch(buildApiUrl('/chat'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query: userInput }) })
      if (!response.ok) throw new Error('Network error')
      const data = await response.json()
      
      console.log('[ChatWidget] Assistant response received:', {
        answer: data.answer?.substring(0, 100) + (data.answer?.length > 100 ? '...' : ''),
        suggestionsCount: data.suggestions?.length || 0,
        suggestions: data.suggestions?.map((s: Suggestion) => ({ text: s.text, action: s.action, type: s.type })) || []
      })
      
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: data.answer, suggestions: getFilteredSuggestions(data.suggestions || [], userInput), timestamp: new Date() }])
    } catch {
      console.error('[ChatWidget] Error sending message:', { error: 'Network error', userInput })
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: 'Sorry, I encountered an error. Please try again.', timestamp: new Date() }])
    } finally { setLoading(false); setIsTyping(false) }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (showTypingSuggestions && typingSuggestions.length > 0) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedSuggestionIndex(p => p < typingSuggestions.length - 1 ? p + 1 : 0) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedSuggestionIndex(p => p > 0 ? p - 1 : typingSuggestions.length - 1) }
      else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) { e.preventDefault(); handleTypingSuggestionClick(typingSuggestions[selectedSuggestionIndex]) }
      else if (e.key === 'Escape') { setShowTypingSuggestions(false); setSelectedSuggestionIndex(-1) }
    } else if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const handleSuggestionClick = (suggestion: Suggestion) => {
    console.log('[ChatWidget] Suggestion clicked:', {
      text: suggestion.text,
      action: suggestion.action,
      type: suggestion.type,
      category: suggestion.category
    })
    
    if (suggestion.action === 'create_ticket') { startTicketProcess() }
    else if (suggestion.action === 'start_live_chat') { setShowChatNowModal(true) }
    else if (suggestion.action === 'contact') { setShowPopup(true); setPopupMessage('Please contact us at support@venturingdigitally.com or call +91-7543081110') }
    else { setInput(suggestion.text); setShowSuggestions(false); setTimeout(() => sendMessage(), 100) }
  }

 const fetchFaqSuggestions = async () => {
  try {
    console.log('[ChatWidget] Fetching FAQ suggestions from API...')
    const res = await fetch(buildApiUrl('/faq-suggestions?limit=12'))
    if (res.ok) {
      const data = await res.json()
      const suggestions: Suggestion[] = Array.isArray(data.suggestions) ? data.suggestions : []
      
      console.log('[ChatWidget] Raw FAQ suggestions from API:', {
        totalCount: suggestions.length,
        suggestions: suggestions.map((s: Suggestion, i: number) => ({
          index: i,
          text: s.text,
          action: s.action,
          type: s.type,
          category: s.category
        }))
      })
      
      // Remove duplicates
      const unique: Suggestion[] = suggestions.filter((s: Suggestion, i: number, arr: Suggestion[]) => {
        const n = normalizeQuestion(s.text)
        return n && arr.findIndex((x: Suggestion) => normalizeQuestion(x.text) === n) === i
      })
      
      console.log('[ChatWidget] FAQ suggestions after deduplication:', {
        beforeCount: suggestions.length,
        afterCount: unique.length
      })
      
      // Store all unique FAQs
      setAllFaqSuggestions(unique)
      
      // Get random 4 questions
      const randomFour: Suggestion[] = getRandomItems(unique, 4)
      
      console.log('[ChatWidget] ✅ Initial random FAQ questions selected:', {
        totalAvailable: unique.length,
        selectedCount: randomFour.length,
        selectedQuestions: randomFour.map((s: Suggestion, idx: number) => ({
          position: idx + 1,
          text: s.text,
          action: s.action
        }))
      })
      
      setFaqSuggestions(randomFour)
    } else {
      console.error('[ChatWidget] Failed to fetch FAQ suggestions:', { status: res.status, statusText: res.statusText })
    }
  } catch (e) { 
    console.error('[ChatWidget] Error fetching FAQ suggestions:', e) 
  }
}

  const startTicketProcess = () => {
    console.log('[ChatWidget] Starting ticket process...')
    setTicketMode(true); setTicketStep(1)
    setTicketData({ firstName: '', lastName: '', email: '', phone: '', query: input })
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: "Great! I'll help you create a support ticket. Let's start with some basic information.\n\n**What's your first name?**", timestamp: new Date() }])
  }

  const handleTicketResponse = (userInput: string) => {
    if (!ticketMode) return false
    let nextStep = ticketStep; let botResponse = ''
    switch (ticketStep) {
      case 1:
        if (userInput.trim()) { setTicketData(p => ({ ...p, firstName: userInput.trim() })); nextStep = 2; botResponse = "Thanks! Now, **what's your last name?**" }
        else botResponse = 'Please enter your first name to continue.'; break
      case 2:
        if (userInput.trim()) { setTicketData(p => ({ ...p, lastName: userInput.trim() })); nextStep = 3; botResponse = "Perfect! **What's your email address?**" }
        else botResponse = 'Please enter your last name to continue.'; break
      case 3:
        if (userInput.trim() && userInput.includes('@')) { setTicketData(p => ({ ...p, email: userInput.trim() })); nextStep = 4; botResponse = "Great! **What's your phone number?** (Optional — type 'skip' to leave blank)" }
        else botResponse = 'Please enter a valid email address.'; break
      case 4:
        setTicketData(p => ({ ...p, phone: (userInput.toLowerCase() === 'skip' || !userInput.trim()) ? '' : userInput.trim() }))
        nextStep = 5; botResponse = 'Excellent! Finally, **please describe your question or issue in detail.**'; break
      case 5:
        if (userInput.trim()) {
          const updated = { ...ticketData, query: userInput.trim() }
          setTicketData(updated); nextStep = 6; botResponse = 'Perfect! Let me create your support ticket now...'
          setTimeout(() => createTicketWithData(updated), 100); return true
        } else botResponse = 'Please describe your question or issue to continue.'; break
      default: return false
    }
    setTicketStep(nextStep)
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: botResponse, timestamp: new Date() }])
    return true
  }

  const createTicketWithData = async (data: typeof ticketData) => {
    setTicketLoading(true)
    try {
      const res = await fetch(buildApiUrl('/tickets/create'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ first_name: data.firstName, last_name: data.lastName, email: data.email, user_query: data.query, phone: data.phone || null }) })
      if (res.ok) {
        const result = await res.json()
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: `🎉 **Support ticket created successfully!**\n\n**Your ticket token:** ${result.ticket.token}\n\nOur team will get back to you within 24 hours. You can also contact us directly at support@venturingdigitally.com\n\nIs there anything else I can help you with?`, timestamp: new Date() }])
        setTicketMode(false); setTicketStep(1); setTicketData({ firstName: '', lastName: '', email: '', phone: '', query: '' })
      } else throw new Error('Failed')
    } catch {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: 'Sorry, there was an error creating your ticket. Please try again or contact us directly at support@venturingdigitally.com', timestamp: new Date() }])
    } finally { setTicketLoading(false) }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; setInput(value); setSelectedSuggestionIndex(-1)
    if (value.length > 2) {
      const filtered = faqSuggestions.filter(s => {
        const q = s.text.toLowerCase(); const v = value.toLowerCase()
        return v.split(' ').some(w => q.includes(w) && w.length > 2) || q.includes(v)
      }).sort((a, b) => {
        const av = a.text.toLowerCase(); const bv = b.text.toLowerCase(); const v = value.toLowerCase()
        if (av.startsWith(v) && !bv.startsWith(v)) return -1
        if (!av.startsWith(v) && bv.startsWith(v)) return 1
        return av.localeCompare(bv)
      })
      setTypingSuggestions(filtered.slice(0, 4).map(s => s.text))
      setShowTypingSuggestions(filtered.length > 0)
    } else { setTypingSuggestions([]); setShowTypingSuggestions(false) }
  }

  const handleTypingSuggestionClick = (suggestion: string) => {
    console.log('[ChatWidget] Typing suggestion selected:', { suggestion })
    setInput(suggestion); setShowTypingSuggestions(false); setTypingSuggestions([])
  }

  // ─── COMPLETELY ISOLATED STYLES using unique class prefix ───
  const uniquePrefix = 'vdw_' // vdw = Venturing Digitally Widget

  const styles = `
    /* RESET - ONLY FOR WIDGET AREA */
    .${uniquePrefix}root *,
    .${uniquePrefix}root *::before,
    .${uniquePrefix}root *::after {
      box-sizing: border-box !important;
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      font-size: 100% !important;
      vertical-align: baseline !important;
    }

    .${uniquePrefix}root {
      position: fixed !important;
      bottom: 24px !important;
      right: 24px !important;
      z-index: 999999 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
      line-height: 1.5 !important;
      -webkit-font-smoothing: antialiased !important;
    }

    /* ── LAUNCHER BUTTON ── */
    .${uniquePrefix}launcher {
      position: relative !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .${uniquePrefix}pulseRing {
      position: absolute !important;
      inset: 0 !important;
      border-radius: 9999px !important;
      background: #6366f1 !important;
      opacity: 0.45 !important;
      animation: ${uniquePrefix}pulse 2s ease-in-out infinite !important;
    }

    .${uniquePrefix}pulseRing2 {
      position: absolute !important;
      inset: -5px !important;
      border-radius: 9999px !important;
      background: #818cf8 !important;
      opacity: 0.2 !important;
      animation: ${uniquePrefix}pulse 2s ease-in-out infinite 0.5s !important;
    }

    .${uniquePrefix}pulseRing--ping {
      animation: ${uniquePrefix}ping 1s ease-in-out !important;
    }

    @keyframes ${uniquePrefix}pulse {
      0%, 100% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(1.18); opacity: 0.15; }
    }

    @keyframes ${uniquePrefix}ping {
      0% { transform: scale(1); opacity: 0.5; }
      100% { transform: scale(1.5); opacity: 0; }
    }

    .${uniquePrefix}btnLaunch {
      position: relative !important;
      z-index: 1 !important;
      width: 68px !important;
      height: 68px !important;
      border-radius: 9999px !important;
      background: #4338ca !important;
      border: 2.5px solid #ffffff !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      box-shadow: 0 8px 28px rgba(67, 56, 202, 0.38) !important;
      transition: transform 0.2s, background 0.2s !important;
      outline: none !important;
      padding: 0 !important;
    }

    .${uniquePrefix}btnLaunch:hover {
      background: #3730a3 !important;
      transform: scale(1.08) !important;
    }

    .${uniquePrefix}btnLaunch:active {
      transform: scale(0.97) !important;
    }

    .${uniquePrefix}btnLaunchImg {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      border-radius: 9999px !important;
      display: block !important;
    }

    .${uniquePrefix}btnLaunchBadge {
      position: absolute !important;
      bottom: -2px !important;
      right: -2px !important;
      width: 24px !important;
      height: 24px !important;
      border-radius: 9999px !important;
      background: #4338ca !important;
      border: 2px solid #ffffff !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25) !important;
    }

    .${uniquePrefix}btnLaunchBadge svg {
      width: 13px !important;
      height: 13px !important;
      color: #fff !important;
    }

    .${uniquePrefix}btnLaunch svg {
      width: 30px !important;
      height: 30px !important;
      color: #fff !important;
    }

    /* Tooltip */
    .${uniquePrefix}tooltip {
      position: absolute !important;
      bottom: calc(100% + 10px) !important;
      right: 0 !important;
      background: #1e1b4b !important;
      color: #fff !important;
      font-size: 13px !important;
      font-weight: 500 !important;
      padding: 6px 12px !important;
      border-radius: 8px !important;
      white-space: nowrap !important;
      pointer-events: none !important;
      opacity: 0 !important;
      transition: opacity 0.15s !important;
    }

    .${uniquePrefix}tooltip::after {
      content: '' !important;
      position: absolute !important;
      top: 100% !important;
      right: 20px !important;
      border: 5px solid transparent !important;
      border-top-color: #1e1b4b !important;
    }

    .${uniquePrefix}launcher:hover .${uniquePrefix}tooltip {
      opacity: 1 !important;
    }

    /* Popup */
    .${uniquePrefix}popup {
      position: absolute !important;
      bottom: calc(100% + 16px) !important;
      right: 0 !important;
      width: 288px !important;
      background: #fff !important;
      border: 1px solid #e5e7eb !important;
      border-radius: 16px !important;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12) !important;
      padding: 14px 16px !important;
      animation: ${uniquePrefix}fadeup 0.2s ease-out forwards !important;
    }

    .${uniquePrefix}popupTail {
      position: absolute !important;
      bottom: -8px !important;
      right: 24px !important;
      width: 14px !important;
      height: 14px !important;
      background: #fff !important;
      border-right: 1px solid #e5e7eb !important;
      border-bottom: 1px solid #e5e7eb !important;
      transform: rotate(45deg) !important;
    }

    .${uniquePrefix}popupInner {
      display: flex !important;
      align-items: flex-start !important;
      gap: 12px !important;
    }

    .${uniquePrefix}popupAvatar {
      width: 40px !important;
      height: 40px !important;
      border-radius: 9999px !important;
      overflow: hidden !important;
      flex-shrink: 0 !important;
      border: 2px solid #e0e7ff !important;
    }

    .${uniquePrefix}popupAvatar img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
    }

    .${uniquePrefix}popupMsg {
      font-size: 14px !important;
      color: #1f2937 !important;
      font-weight: 500 !important;
      line-height: 1.5 !important;
      margin: 0 !important;
    }

    .${uniquePrefix}popupDismiss {
      margin-top: 6px !important;
      font-size: 12px !important;
      color: #9ca3af !important;
      background: none !important;
      border: none !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    .${uniquePrefix}popupDismiss:hover {
      color: #6b7280 !important;
    }

    /* ── CHAT WINDOW ── */
    .${uniquePrefix}window {
      width: 400px !important;
      height: 660px !important;
      background: #fff !important;
      border-radius: 20px !important;
      border: 1px solid #e5e7eb !important;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15) !important;
      display: flex !important;
      flex-direction: column !important;
      overflow: hidden !important;
      animation: ${uniquePrefix}slidein 0.22s ease-out forwards !important;
    }

    @keyframes ${uniquePrefix}slidein {
      from { opacity: 0; transform: translateY(24px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes ${uniquePrefix}fadein {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes ${uniquePrefix}fadeup {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Header */
    .${uniquePrefix}header {
      background: #4338ca !important;
      padding: 14px 18px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      flex-shrink: 0 !important;
    }

    .${uniquePrefix}headerLeft {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
    }

    .${uniquePrefix}headerAvatar {
      width: 44px !important;
      height: 44px !important;
      border-radius: 9999px !important;
      overflow: hidden !important;
      border: 2px solid rgba(255, 255, 255, 0.35) !important;
      flex-shrink: 0 !important;
    }

    .${uniquePrefix}headerAvatar img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
    }

    .${uniquePrefix}headerName {
      color: #fff !important;
      font-size: 15px !important;
      font-weight: 600 !important;
      line-height: 1.3 !important;
      margin: 0 !important;
    }

    .${uniquePrefix}headerStatus {
      display: flex !important;
      align-items: center !important;
      gap: 6px !important;
      margin-top: 2px !important;
    }

    .${uniquePrefix}headerDot {
      width: 7px !important;
      height: 7px !important;
      border-radius: 9999px !important;
      background: #6ee7b7 !important;
      flex-shrink: 0 !important;
    }

    .${uniquePrefix}headerSub {
      font-size: 12px !important;
      color: rgba(255, 255, 255, 0.75) !important;
      margin: 0 !important;
    }

    .${uniquePrefix}backBtn {
      display: none !important;
      align-items: center !important;
      gap: 5px !important;
      background: rgba(255, 255, 255, 0.16) !important;
      border: 1px solid rgba(255, 255, 255, 0.28) !important;
      color: #ffffff !important;
      padding: 6px 12px 6px 8px !important;
      border-radius: 9999px !important;
      cursor: pointer !important;
      font-size: 13px !important;
      font-weight: 600 !important;
      margin-right: 4px !important;
      transition: all 0.15s ease !important;
      outline: none !important;
      flex-shrink: 0 !important;
    }

    .${uniquePrefix}backBtn:hover,
    .${uniquePrefix}backBtn:active {
      background: rgba(255, 255, 255, 0.28) !important;
      transform: translateX(-2px) !important;
    }

    .${uniquePrefix}backBtn svg {
      width: 18px !important;
      height: 18px !important;
      color: #ffffff !important;
    }

    .${uniquePrefix}closeBtn {
      background: none !important;
      border: none !important;
      cursor: pointer !important;
      color: rgba(255, 255, 255, 0.7) !important;
      padding: 6px !important;
      border-radius: 8px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      transition: all 0.15s !important;
    }

    .${uniquePrefix}closeBtn:hover {
      background: rgba(255, 255, 255, 0.15) !important;
      color: #fff !important;
      transform: rotate(90deg) !important;
    }

    .${uniquePrefix}closeBtn svg {
      width: 20px !important;
      height: 20px !important;
    }

    /* Body / scroll area */
    .${uniquePrefix}body {
      flex: 1 !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      padding: 20px 16px !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 18px !important;
      background: #f5f6fa !important;
    }

    .${uniquePrefix}body::-webkit-scrollbar {
      width: 4px !important;
    }

    .${uniquePrefix}body::-webkit-scrollbar-track {
      background: #f1f5f9 !important;
      border-radius: 10px !important;
    }

    .${uniquePrefix}body::-webkit-scrollbar-thumb {
      background: #c7d2fe !important;
      border-radius: 10px !important;
    }

    .${uniquePrefix}body::-webkit-scrollbar-thumb:hover {
      background: #818cf8 !important;
    }

    /* Welcome state */
    .${uniquePrefix}welcome {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      gap: 14px !important;
      padding: 4px 0 6px !important;
      animation: ${uniquePrefix}fadein 0.2s ease-out forwards !important;
    }

    .${uniquePrefix}welcomeAvatar {
      width: 78px !important;
      height: 78px !important;
      border-radius: 9999px !important;
      overflow: hidden !important;
      border: 4px solid #fff !important;
      box-shadow: 0 4px 20px rgba(67, 56, 202, 0.2) !important;
    }

    .${uniquePrefix}welcomeAvatar img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
    }

    .${uniquePrefix}welcomeTitle {
      font-size: 20px !important;
      font-weight: 700 !important;
      color: #111827 !important;
      margin: 0 !important;
    }

    .${uniquePrefix}welcomeSub {
      font-size: 14px !important;
      color: #6b7280 !important;
      line-height: 1.6 !important;
      max-width: 258px !important;
      margin: 0 !important;
    }

    /* FAQ cards */
    .${uniquePrefix}faqSection {
      width: 100% !important;
    }

    .${uniquePrefix}faqLabel {
      font-size: 11px !important;
      font-weight: 700 !important;
      color: #9ca3af !important;
      text-transform: uppercase !important;
      letter-spacing: 0.08em !important;
      text-align: center !important;
      margin: 0 0 10px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
    }

    .${uniquePrefix}refreshBtn {
      background: none !important;
      border: none !important;
      cursor: pointer !important;
      font-size: 12px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: #818cf8 !important;
      padding: 4px !important;
      border-radius: 6px !important;
      transition: all 0.2s !important;
    }

    .${uniquePrefix}refreshBtn:hover {
      background: #eef2ff !important;
      transform: rotate(30deg) !important;
    }

    .${uniquePrefix}faqList {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      list-style: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .${uniquePrefix}faqBtn {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      width: 100% !important;
      padding: 12px 14px !important;
      background: #fff !important;
      border: 1.5px solid #e5e7eb !important;
      border-radius: 14px !important;
      cursor: pointer !important;
      text-align: left !important;
      transition: all 0.15s !important;
    }

    .${uniquePrefix}faqBtn:hover {
      background: #eef2ff !important;
      border-color: #a5b4fc !important;
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1) !important;
    }

    .${uniquePrefix}faqIcon {
      width: 36px !important;
      height: 36px !important;
      border-radius: 10px !important;
      background: #eef2ff !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0 !important;
      font-size: 20px !important;
    }

    .${uniquePrefix}faqBtn:hover .${uniquePrefix}faqIcon {
      background: #e0e7ff !important;
    }

    .${uniquePrefix}faqText {
      flex: 1 !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      color: #374151 !important;
      line-height: 1.4 !important;
    }

    .${uniquePrefix}faqBtn:hover .${uniquePrefix}faqText {
      color: #3730a3 !important;
    }

    .${uniquePrefix}faqChevron {
      flex-shrink: 0 !important;
      width: 16px !important;
      height: 16px !important;
      color: #d1d5db !important;
      transition: all 0.15s !important;
    }

    .${uniquePrefix}faqBtn:hover .${uniquePrefix}faqChevron {
      color: #818cf8 !important;
      transform: translateX(2px) !important;
    }

    /* Messages */
    .${uniquePrefix}msgRow {
      display: flex !important;
      align-items: flex-end !important;
      gap: 8px !important;
      animation: ${uniquePrefix}fadein 0.2s ease-out forwards !important;
    }

    .${uniquePrefix}msgRow--user {
      flex-direction: row-reverse !important;
    }

    .${uniquePrefix}msgAvatar {
      width: 32px !important;
      height: 32px !important;
      border-radius: 9999px !important;
      overflow: hidden !important;
      flex-shrink: 0 !important;
      border: 1px solid #e5e7eb !important;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06) !important;
    }

    .${uniquePrefix}msgAvatar img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
    }

    .${uniquePrefix}userAvatar {
      width: 32px !important;
      height: 32px !important;
      border-radius: 9999px !important;
      flex-shrink: 0 !important;
      background: #d1fae5 !important;
      border: 1px solid #a7f3d0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .${uniquePrefix}userAvatar svg {
      width: 16px !important;
      height: 16px !important;
      color: #059669 !important;
    }

    .${uniquePrefix}bubble {
      max-width: 82% !important;
      padding: 11px 14px !important;
      border-radius: 18px !important;
      font-size: 14px !important;
      line-height: 1.6 !important;
      word-break: break-word !important;
    }

    .${uniquePrefix}bubble--bot {
      background: #fff !important;
      border: 1px solid #e5e7eb !important;
      color: #1f2937 !important;
      border-bottom-left-radius: 4px !important;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05) !important;
    }

    .${uniquePrefix}bubble--user {
      background: #4338ca !important;
      color: #fff !important;
      border-bottom-right-radius: 4px !important;
    }

    .${uniquePrefix}bubbleTime {
      font-size: 10px !important;
      margin-top: 5px !important;
      display: block !important;
    }

    .${uniquePrefix}bubble--bot .${uniquePrefix}bubbleTime {
      color: #9ca3af !important;
    }

    .${uniquePrefix}bubble--user .${uniquePrefix}bubbleTime {
      color: rgba(255, 255, 255, 0.55) !important;
    }

    /* Suggestion chips */
    .${uniquePrefix}chips {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 7px !important;
      margin-top: 8px !important;
      margin-left: 40px !important;
    }

    .${uniquePrefix}chipsLabel {
      font-size: 11px !important;
      font-weight: 700 !important;
      color: #9ca3af !important;
      text-transform: uppercase !important;
      letter-spacing: 0.07em !important;
      margin-bottom: 6px !important;
      display: block !important;
    }

    .${uniquePrefix}chip {
      padding: 6px 13px !important;
      font-size: 13px !important;
      font-weight: 500 !important;
      color: #4b5563 !important;
      background: #fff !important;
      border: 1.5px solid #e5e7eb !important;
      border-radius: 9999px !important;
      cursor: pointer !important;
      transition: all 0.15s !important;
      white-space: nowrap !important;
    }

    .${uniquePrefix}chip:hover {
      background: #eef2ff !important;
      border-color: #a5b4fc !important;
      color: #3730a3 !important;
    }

    /* Typing dots */
    .${uniquePrefix}typing {
      display: flex !important;
      align-items: flex-end !important;
      gap: 8px !important;
      animation: ${uniquePrefix}fadein 0.2s ease-out !important;
    }

    .${uniquePrefix}typingBubble {
      background: #fff !important;
      border: 1px solid #e5e7eb !important;
      border-radius: 18px !important;
      border-bottom-left-radius: 4px !important;
      padding: 12px 16px !important;
      display: flex !important;
      gap: 5px !important;
      align-items: center !important;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05) !important;
    }

    .${uniquePrefix}dot {
      width: 8px !important;
      height: 8px !important;
      border-radius: 9999px !important;
      background: #d1d5db !important;
      animation: ${uniquePrefix}bounce 1.1s infinite ease-in-out !important;
    }

    .${uniquePrefix}dot:nth-child(2) {
      animation-delay: 0.14s !important;
    }

    .${uniquePrefix}dot:nth-child(3) {
      animation-delay: 0.28s !important;
    }

    @keyframes ${uniquePrefix}bounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-7px); }
    }

    /* Input area */
    .${uniquePrefix}inputArea {
      padding: 12px 14px 14px !important;
      background: #fff !important;
      border-top: 1px solid #f0f0f0 !important;
      flex-shrink: 0 !important;
    }

    .${uniquePrefix}inputRow {
      display: flex !important;
      gap: 8px !important;
      align-items: center !important;
      position: relative !important;
    }

    .${uniquePrefix}inputWrap {
      flex: 1 !important;
      position: relative !important;
    }

    .${uniquePrefix}input {
      display: block !important;
      width: 100% !important;
      padding: 11px 40px 11px 14px !important;
      background: #f3f4f6 !important;
      border: 1.5px solid #e5e7eb !important;
      border-radius: 12px !important;
      font-size: 15px !important;
      color: #1f2937 !important;
      line-height: 1.4 !important;
      transition: all 0.15s !important;
    }

    .${uniquePrefix}input:focus {
      border-color: #818cf8 !important;
      box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.15) !important;
      outline: none !important;
    }

    .${uniquePrefix}input::placeholder {
      color: #9ca3af !important;
    }

    .${uniquePrefix}input:disabled {
      opacity: 0.55 !important;
      cursor: not-allowed !important;
    }

    .${uniquePrefix}clearBtn {
      position: absolute !important;
      right: 12px !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      background: none !important;
      border: none !important;
      cursor: pointer !important;
      padding: 2px !important;
      color: #9ca3af !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .${uniquePrefix}clearBtn:hover {
      color: #6b7280 !important;
    }

    .${uniquePrefix}clearBtn svg {
      width: 15px !important;
      height: 15px !important;
    }

    .${uniquePrefix}sendBtn {
      width: 44px !important;
      height: 44px !important;
      border-radius: 12px !important;
      background: #4338ca !important;
      color: #fff !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0 !important;
      border: none !important;
      transition: all 0.15s !important;
      box-shadow: 0 3px 10px rgba(67, 56, 202, 0.3) !important;
    }

    .${uniquePrefix}sendBtn:hover {
      background: #3730a3 !important;
      transform: scale(1.06) !important;
    }

    .${uniquePrefix}sendBtn:active {
      transform: scale(0.96) !important;
    }

    .${uniquePrefix}sendBtn:disabled {
      opacity: 0.4 !important;
      cursor: not-allowed !important;
      transform: none !important;
      box-shadow: none !important;
    }

    .${uniquePrefix}sendBtn svg {
      width: 20px !important;
      height: 20px !important;
    }

    /* Autocomplete dropdown */
    .${uniquePrefix}autocomplete {
      position: absolute !important;
      bottom: calc(100% + 8px) !important;
      left: 0 !important;
      right: 0 !important;
      background: #fff !important;
      border-radius: 12px !important;
      border: 1px solid #e5e7eb !important;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
      max-height: 220px !important;
      overflow-y: auto !important;
      z-index: 1000 !important;
    }

    .${uniquePrefix}autocompleteHeader {
      padding: 8px 14px !important;
      font-size: 11px !important;
      font-weight: 700 !important;
      color: #9ca3af !important;
      text-transform: uppercase !important;
      letter-spacing: 0.07em !important;
      background: #f9fafb !important;
      border-bottom: 1px solid #f0f0f0 !important;
    }

    .${uniquePrefix}autocompleteItem {
      display: block !important;
      width: 100% !important;
      padding: 10px 14px !important;
      font-size: 14px !important;
      color: #374151 !important;
      cursor: pointer !important;
      text-align: left !important;
      background: none !important;
      border: none !important;
      transition: all 0.1s !important;
    }

    .${uniquePrefix}autocompleteItem:hover {
      background: #eef2ff !important;
      color: #3730a3 !important;
    }

    .${uniquePrefix}autocompleteItem--active {
      background: #eef2ff !important;
      color: #3730a3 !important;
    }

    .${uniquePrefix}footerText {
      text-align: center !important;
      font-size: 10px !important;
      color: #d1d5db !important;
      margin-top: 8px !important;
      letter-spacing: 0.02em !important;
    }

    /* ── MOBILE RESPONSIVENESS ── */
    @media (max-width: 640px) {
      .${uniquePrefix}root {
        bottom: 16px !important;
        right: 16px !important;
      }

      .${uniquePrefix}window {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        max-width: 100vw !important;
        height: 100% !important;
        height: 100dvh !important;
        max-height: 100dvh !important;
        border-radius: 0 !important;
        border: none !important;
        box-shadow: none !important;
        z-index: 1000000 !important;
      }

      .${uniquePrefix}header {
        padding: calc(14px + env(safe-area-inset-top, 0px)) 16px 14px !important;
        border-radius: 0 !important;
      }

      .${uniquePrefix}headerName {
        font-size: 16px !important;
      }

      .${uniquePrefix}body {
        padding: 14px 12px !important;
        gap: 14px !important;
      }

      .${uniquePrefix}welcomeCard {
        padding: 16px 12px !important;
      }

      .${uniquePrefix}welcomeTitle {
        font-size: 18px !important;
      }

      .${uniquePrefix}welcomeSub {
        font-size: 13px !important;
      }

      .${uniquePrefix}btnLaunch {
        width: 60px !important;
        height: 60px !important;
      }

      .${uniquePrefix}popup {
        width: calc(100vw - 32px) !important;
        max-width: 320px !important;
        right: 0 !important;
      }

      .${uniquePrefix}inputArea {
        padding: 10px 12px calc(12px + env(safe-area-inset-bottom, 0px)) !important;
      }

      .${uniquePrefix}input {
        font-size: 16px !important; /* Prevents auto-zoom on iOS */
        padding: 10px 38px 10px 12px !important;
      }

      .${uniquePrefix}sendBtn {
        width: 42px !important;
        height: 42px !important;
      }

      .${uniquePrefix}bubble {
        max-width: 88% !important;
        font-size: 14px !important;
      }

      .${uniquePrefix}chips {
        margin-left: 0 !important;
      }

      .${uniquePrefix}faqBtn {
        padding: 10px 12px !important;
        font-size: 13px !important;
      }

      .${uniquePrefix}chip {
        font-size: 12px !important;
        padding: 5px 11px !important;
      }

      .${uniquePrefix}backBtn {
        display: inline-flex !important;
      }
    }
  `

  return (
    <div className={`${uniquePrefix}root`}>
      <style>{styles}</style>

      {/* ── LAUNCHER ── */}
      {!open && !liveChatSession && (
        <div className={`${uniquePrefix}launcher`}>
          <div className={`${uniquePrefix}pulseRing ${isAnimating ? `${uniquePrefix}pulseRing--ping` : ''}`} />
          <div className={`${uniquePrefix}pulseRing2`} />

          <button className={`${uniquePrefix}btnLaunch`} onClick={() => setOpen(true)} aria-label="Open chat">
            <img src={chatbotAvatar} alt="Chatbot" className={`${uniquePrefix}btnLaunchImg`} />
            <span className={`${uniquePrefix}btnLaunchBadge`}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>

          <div className={`${uniquePrefix}tooltip`}>Chat with us</div>

          {showPopup && (
            <div className={`${uniquePrefix}popup`}>
              <div className={`${uniquePrefix}popupInner`}>
                <div className={`${uniquePrefix}popupAvatar`}>
                  <img src={chatbotAvatar} alt="Chatbot" />
                </div>
                <div>
                  <p className={`${uniquePrefix}popupMsg`}>{popupMessage}</p>
                  <button className={`${uniquePrefix}popupDismiss`} onClick={() => setShowPopup(false)}>Dismiss</button>
                </div>
              </div>
              <div className={`${uniquePrefix}popupTail`} />
            </div>
          )}
        </div>
      )}

      {/* ── CHAT WINDOW ── */}
      {open && !liveChatSession && (
        <div className={`${uniquePrefix}window`}>
          {/* Header */}
          <div className={`${uniquePrefix}header`}>
            <div className={`${uniquePrefix}headerLeft`}>
              <button
                className={`${uniquePrefix}backBtn`}
                onClick={() => setOpen(false)}
                aria-label="Back to website"
                title="Back to website"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </button>
              <div className={`${uniquePrefix}headerAvatar`}>
                <img src={chatbotAvatar} alt="Chatbot" />
              </div>
              <div>
                <p className={`${uniquePrefix}headerName`}>Venturing Digitally</p>
                <div className={`${uniquePrefix}headerStatus`}>
                  <span className={`${uniquePrefix}headerDot`} />
                  <p className={`${uniquePrefix}headerSub`}>AI Assistant · Online</p>
                </div>
              </div>
            </div>
            <button className={`${uniquePrefix}closeBtn`} onClick={() => setOpen(false)} aria-label="Close chat">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div ref={listRef} className={`${uniquePrefix}body`}>
            {messages.length === 0 && showSuggestions && (
              <div className={`${uniquePrefix}welcome`}>
                <div className={`${uniquePrefix}welcomeAvatar`}>
                  <img src={chatbotAvatar} alt="Chatbot" />
                </div>
                <p className={`${uniquePrefix}welcomeTitle`}>Welcome! 👋</p>
                <p className={`${uniquePrefix}welcomeSub`}>I'm your AI assistant. Ask me anything or pick a popular question below.</p>

                <div className={`${uniquePrefix}faqSection`}>
                  <div className={`${uniquePrefix}faqLabel`}>
                    Popular questions
                    <button 
                      onClick={() => refreshRandomFaqSuggestions()}
                      className={`${uniquePrefix}refreshBtn`}
                      title="Refresh questions"
                    >
                      🔄
                    </button>
                  </div>
                  <ul className={`${uniquePrefix}faqList`}>
                    {faqSuggestions.slice(0, 4).map((suggestion, index) => (
                      <li key={`${normalizeQuestion(suggestion.text)}-${index}-${Date.now()}`}>
                        <button
                          className={`${uniquePrefix}faqBtn`}
                          onClick={() => { 
                            console.log('[ChatWidget] FAQ button clicked:', { text: suggestion.text, action: suggestion.action })
                            setInput(suggestion.text); 
                            setShowSuggestions(false); 
                            setTimeout(() => sendMessage(), 100) 
                          }}
                        >
                          <span className={`${uniquePrefix}faqIcon`}>{getFaqIcon(suggestion.text)}</span>
                          <span className={`${uniquePrefix}faqText`}>{suggestion.text}</span>
                          <svg className={`${uniquePrefix}faqChevron`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {messages.map(m => (
              <div key={m.id}>
                <div className={`${uniquePrefix}msgRow ${m.role === 'user' ? `${uniquePrefix}msgRow--user` : ''}`}>
                  {m.role === 'assistant' && (
                    <div className={`${uniquePrefix}msgAvatar`}>
                      <img src={chatbotAvatar} alt="Bot" />
                    </div>
                  )}
                  <div className={`${uniquePrefix}bubble ${m.role === 'assistant' ? `${uniquePrefix}bubble--bot` : `${uniquePrefix}bubble--user`}`}>
                    <div style={{ whiteSpace: 'pre-wrap' }}>{m.content}</div>
                    {m.timestamp && <span className={`${uniquePrefix}bubbleTime`}>{formatTime(m.timestamp)}</span>}
                  </div>
                  {m.role === 'user' && (
                    <div className={`${uniquePrefix}userAvatar`}>
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>

                {m.role === 'assistant' && m.suggestions && m.suggestions.length > 0 && (
                  <div className={`${uniquePrefix}chips`}>
                    <span className={`${uniquePrefix}chipsLabel`}>Suggested</span>
                    {m.suggestions.map((s, idx) => (
                      <button 
                        key={idx} 
                        className={`${uniquePrefix}chip`} 
                        onClick={() => {
                          console.log('[ChatWidget] Suggested chip clicked:', { text: s.text, action: s.action })
                          handleSuggestionClick(s)
                        }}
                      >
                        {s.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className={`${uniquePrefix}typing`}>
                <div className={`${uniquePrefix}msgAvatar`}>
                  <img src={chatbotAvatar} alt="Bot" />
                </div>
                <div className={`${uniquePrefix}typingBubble`}>
                  <div className={`${uniquePrefix}dot`} />
                  <div className={`${uniquePrefix}dot`} />
                  <div className={`${uniquePrefix}dot`} />
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className={`${uniquePrefix}inputArea`}>
            <div className={`${uniquePrefix}inputRow`}>
              <div className={`${uniquePrefix}inputWrap`}>
                <input
                  ref={inputRef}
                  className={`${uniquePrefix}input`}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKey}
                  placeholder="Type your message…"
                  disabled={loading}
                />
                {input && (
                  <button className={`${uniquePrefix}clearBtn`} onClick={() => setInput('')} aria-label="Clear">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                {showTypingSuggestions && typingSuggestions.length > 0 && (
                  <div className={`${uniquePrefix}autocomplete`}>
                    <div className={`${uniquePrefix}autocompleteHeader`}>Suggestions ({typingSuggestions.length})</div>
                    {typingSuggestions.map((s, idx) => (
                      <button
                        key={idx}
                        className={`${uniquePrefix}autocompleteItem ${idx === selectedSuggestionIndex ? `${uniquePrefix}autocompleteItem--active` : ''}`}
                        onClick={() => handleTypingSuggestionClick(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                className={`${uniquePrefix}sendBtn`}
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className={`${uniquePrefix}footerText`}>Powered by Venturing Digitally AI</div>
          </div>
        </div>
      )}

      {/* Live chat modals */}
      <ChatNowModal
        isOpen={showChatNowModal}
        onClose={() => setShowChatNowModal(false)}
        onChatStarted={(sessionId: number, userId: string, supportUserId?: number) => {
          setLiveChatSession({ sessionId, userId, supportUserId: supportUserId || 1 })
          setShowChatNowModal(false)
        }}
        onRequestCreated={(userId: string) => setCurrentUserId(userId)}
        onTimeout={() => setShowChatNowModal(false)}
      />
      {liveChatSession && (
        <LiveChatWindow
          sessionId={liveChatSession.sessionId}
          userId={liveChatSession.userId}
          supportUserId={liveChatSession.supportUserId}
          onEndChat={() => setLiveChatSession(null)}
          wsConnection={wsConnection}
          userName={liveChatSession.userName || 'User'}
        />
      )}
      <RejectionModal
        isOpen={showRejectionModal}
        onClose={() => setShowRejectionModal(false)}
        message={rejectionMessage}
        title="Request Rejected"
        showTicketOption={true}
      />
    </div>
  )
}

export default ChatWidget