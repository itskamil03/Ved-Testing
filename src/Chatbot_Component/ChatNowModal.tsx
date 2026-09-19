import React, { useState, useEffect, useRef } from 'react';
import { buildApiUrl } from '../lib/api';

interface ChatCategory {
  id: number;
  name: string;
  description: string;
}

interface ChatSubcategory {
  id: number;
  category_id: number;
  name: string;
  description: string;
  is_active: boolean;
}

interface ChatNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChatStarted: (sessionId: number, userId: string, supportUserId?: number) => void;
  onRequestCreated: (userId: string) => void;
  onTimeout?: () => void;
}

const ChatNowModal: React.FC<ChatNowModalProps> = ({ isOpen, onClose, onChatStarted, onRequestCreated, onTimeout }) => {
  const [categories, setCategories] = useState<ChatCategory[]>([]);
  const [subcategories, setSubcategories] = useState<ChatSubcategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [requestId, setRequestId] = useState<string | null>(null);
  const [actualRequestId, setActualRequestId] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);

  // Unique prefix for this component to avoid style conflicts
  const prefix = 'cnm_'; // ChatNowModal

  useEffect(() => {
    if (isOpen) {
      fetchCategories();
      // Reset states when modal opens
      setIsWaiting(false);
      setTimeLeft(0);
      setRequestId(null);
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    
    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [isOpen]);

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            // Timer expired - auto close modal
            setIsWaiting(false);
            setError('Request timed out. Please try again.');
            if (onTimeout) {
              onTimeout();
            }
            return 0;
          }
          return newTime;
        });
      }, 1000);
    } else {
      // Clear timer when timeLeft reaches 0
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    
    // Cleanup function
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [timeLeft, onTimeout]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(buildApiUrl('/chat/categories'));
      const data = await response.json();
      setCategories(data.categories);
      if (data.categories.length > 0) {
        setSelectedCategory(data.categories[0].id);
        // Fetch subcategories for the first category
        fetchSubcategories(data.categories[0].id);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchSubcategories = async (categoryId: number) => {
    try {
      const response = await fetch(buildApiUrl(`/chat/subcategories/${categoryId}`));
      if (response.ok) {
        const data = await response.json();
        setSubcategories(data);
        // Reset selected subcategory when category changes
        setSelectedSubcategory(data.length > 0 ? data[0].id : null);
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      setSubcategories([]);
      setSelectedSubcategory(null);
    }
  };

  const cancelRequest = async () => {
    if (!actualRequestId || !requestId) {
      console.error('No request to cancel');
      return;
    }

    try {
      const response = await fetch(buildApiUrl('/chat/request/cancel'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          request_id: actualRequestId,
          user_id: requestId
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Reset states
        setIsWaiting(false);
        setTimeLeft(0);
        setRequestId(null);
        setActualRequestId(null);
        if (timerRef.current) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
        }
        // Close modal
        onClose();
      } else {
        setError('Failed to cancel request. Please try again.');
      }
    } catch (error) {
      console.error('Error canceling request:', error);
      setError('Network error. Please try again.');
    }
  };

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
    fetchSubcategories(categoryId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!selectedCategory) {
      setError('Please select a category');
      return;
    }
    
    if (subcategories && subcategories.length > 0 && !selectedSubcategory) {
      setError('Please select a subcategory');
      return;
    }
    
    if (!userName.trim()) {
      setError('Name is required');
      return;
    }
    
    if (!message.trim()) {
      setError('Message is required');
      return;
    }
    
    if (message.trim().length < 20) {
      setError('Message must be at least 20 characters long');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(buildApiUrl('/chat/request'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: userName.trim(),
          user_email: userEmail.trim() || undefined,
          category_id: selectedCategory,
          subcategory_id: selectedSubcategory,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Start waiting state with timer
        setIsWaiting(true);
        setTimeLeft(120); // 120 seconds (2 minutes) timer
        setRequestId(data.user_id);
        setActualRequestId(data.request_id);
        onRequestCreated(data.user_id);
        // Don't close modal - let WebSocket handle it
      } else {
        setError('Failed to create chat request. Please try again.');
      }
    } catch (error) {
      console.error('Error creating chat request:', error);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  // Isolated styles using unique prefix
  const styles = `
    /* Reset for modal container */
    .${prefix}overlay {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background-color: rgba(0, 0, 0, 0.5) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      z-index: 1000000 !important;
    }

    .${prefix}modal {
      background-color: #ffffff !important;
      border-radius: 12px !important;
      padding: 24px !important;
      width: 90% !important;
      max-width: 500px !important;
      max-height: 90vh !important;
      overflow-y: auto !important;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
    }

    /* Header */
    .${prefix}header {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      margin-bottom: 20px !important;
    }

    .${prefix}title {
      font-size: 18px !important;
      font-weight: 600 !important;
      margin: 0 !important;
      color: #111827 !important;
    }

    .${prefix}closeBtn {
      background: none !important;
      border: none !important;
      font-size: 24px !important;
      cursor: pointer !important;
      color: #9ca3af !important;
      padding: 0 !important;
      width: 32px !important;
      height: 32px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      border-radius: 6px !important;
      transition: all 0.2s !important;
    }

    .${prefix}closeBtn:hover {
      background-color: #f3f4f6 !important;
      color: #374151 !important;
    }

    /* Form elements */
    .${prefix}formGroup {
      margin-bottom: 16px !important;
    }

    .${prefix}label {
      display: block !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      margin-bottom: 6px !important;
      color: #374151 !important;
    }

    .${prefix}select {
      width: 100% !important;
      padding: 10px !important;
      border: 1px solid #d1d5db !important;
      border-radius: 6px !important;
      font-size: 14px !important;
      background-color: #ffffff !important;
      color: #1f2937 !important;
      transition: all 0.2s !important;
    }

    .${prefix}select:focus {
      outline: none !important;
      border-color: #6366f1 !important;
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2) !important;
    }

    .${prefix}input {
      width: 100% !important;
      padding: 10px !important;
      border: 1px solid #d1d5db !important;
      border-radius: 6px !important;
      font-size: 14px !important;
      background-color: #ffffff !important;
      color: #1f2937 !important;
      transition: all 0.2s !important;
    }

    .${prefix}input:focus {
      outline: none !important;
      border-color: #6366f1 !important;
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2) !important;
    }

    .${prefix}textarea {
      width: 100% !important;
      padding: 10px !important;
      border: 1px solid #d1d5db !important;
      border-radius: 6px !important;
      font-size: 14px !important;
      background-color: #ffffff !important;
      color: #1f2937 !important;
      resize: vertical !important;
      font-family: inherit !important;
      transition: all 0.2s !important;
    }

    .${prefix}textarea:focus {
      outline: none !important;
      border-color: #6366f1 !important;
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2) !important;
    }

    /* Error message */
    .${prefix}error {
      padding: 10px !important;
      background-color: #fef2f2 !important;
      border: 1px solid #fecaca !important;
      border-radius: 6px !important;
      color: #dc2626 !important;
      font-size: 14px !important;
      margin-bottom: 16px !important;
    }

    /* Button styles */
    .${prefix}buttonGroup {
      display: flex !important;
      gap: 12px !important;
      justify-content: flex-end !important;
    }

    .${prefix}btnCancel {
      padding: 10px 20px !important;
      border: 1px solid #d1d5db !important;
      border-radius: 6px !important;
      background-color: #ffffff !important;
      color: #374151 !important;
      cursor: pointer !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      transition: all 0.2s !important;
    }

    .${prefix}btnCancel:hover {
      background-color: #f9fafb !important;
      border-color: #9ca3af !important;
    }

    .${prefix}btnSubmit {
      padding: 10px 20px !important;
      border: none !important;
      border-radius: 6px !important;
      background-color: #3b82f6 !important;
      color: #ffffff !important;
      cursor: pointer !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      transition: all 0.2s !important;
    }

    .${prefix}btnSubmit:hover:not(:disabled) {
      background-color: #2563eb !important;
    }

    .${prefix}btnSubmit:disabled {
      background-color: #9ca3af !important;
      cursor: not-allowed !important;
    }

    /* Waiting state styles */
    .${prefix}waitingContainer {
      text-align: center !important;
      padding: 20px 0 !important;
    }

    .${prefix}waitingIcon {
      font-size: 48px !important;
      margin-bottom: 16px !important;
      color: #3b82f6 !important;
      animation: ${prefix}pulse 1s ease-in-out infinite !important;
    }

    .${prefix}waitingTitle {
      font-size: 20px !important;
      font-weight: 600 !important;
      margin-bottom: 8px !important;
      color: #374151 !important;
    }

    .${prefix}timer {
      font-size: 32px !important;
      font-weight: bold !important;
      margin-bottom: 16px !important;
      font-family: monospace !important;
    }

    .${prefix}timerCritical {
      color: #dc2626 !important;
    }

    .${prefix}timerWarning {
      color: #f59e0b !important;
    }

    .${prefix}timerNormal {
      color: #3b82f6 !important;
    }

    .${prefix}progressBar {
      width: 100% !important;
      height: 12px !important;
      background-color: #e5e7eb !important;
      border-radius: 6px !important;
      overflow: hidden !important;
      margin-bottom: 16px !important;
    }

    .${prefix}progressFill {
      height: 100% !important;
      transition: width 1s linear !important;
      border-radius: 6px !important;
    }

    .${prefix}progressFillCritical {
      background-color: #dc2626 !important;
    }

    .${prefix}progressFillWarning {
      background-color: #f59e0b !important;
    }

    .${prefix}progressFillNormal {
      background-color: #3b82f6 !important;
    }

    .${prefix}waitingText {
      font-size: 14px !important;
      color: #6b7280 !important;
      margin-bottom: 20px !important;
    }

    .${prefix}btnCancelRequest {
      padding: 10px 20px !important;
      border: 1px solid #d1d5db !important;
      border-radius: 6px !important;
      background-color: #ffffff !important;
      color: #374151 !important;
      cursor: pointer !important;
      font-size: 14px !important;
      transition: all 0.2s !important;
    }

    .${prefix}btnCancelRequest:hover {
      background-color: #f9fafb !important;
      border-color: #9ca3af !important;
    }

    /* Animations */
    @keyframes ${prefix}pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  `;

  // Helper to get timer color class
  const getTimerColorClass = () => {
    if (timeLeft <= 20) return `${prefix}timerCritical`;
    if (timeLeft <= 40) return `${prefix}timerWarning`;
    return `${prefix}timerNormal`;
  };

  // Helper to get progress bar color class
  const getProgressColorClass = () => {
    if (timeLeft <= 20) return `${prefix}progressFillCritical`;
    if (timeLeft <= 40) return `${prefix}progressFillWarning`;
    return `${prefix}progressFillNormal`;
  };

  return (
    <>
      <style>{styles}</style>
      <div className={`${prefix}overlay`}>
        <div className={`${prefix}modal`}>
          <div className={`${prefix}header`}>
            <h3 className={`${prefix}title`}>Chat Now</h3>
            <button className={`${prefix}closeBtn`} onClick={onClose}>×</button>
          </div>

          {isWaiting ? (
            // Waiting state with timer
            <div className={`${prefix}waitingContainer`}>
              <div className={`${prefix}waitingIcon`}>⏱️</div>
              <h3 className={`${prefix}waitingTitle`}>Waiting for Support Agent...</h3>
              <div className={`${getTimerColorClass()}`}>
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </div>
              <div className={`${prefix}progressBar`}>
                <div 
                  className={`${prefix}progressFill ${getProgressColorClass()}`}
                  style={{ width: `${(timeLeft / 120) * 100}%` }}
                />
              </div>
              <p className={`${prefix}waitingText`}>
                Your request has been sent. A support agent will connect with you shortly.
              </p>
              <button
                className={`${prefix}btnCancelRequest`}
                onClick={cancelRequest}
              >
                Cancel Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Category Dropdown */}
              <div className={`${prefix}formGroup`}>
                <label className={`${prefix}label`}>Category *</label>
                <select
                  className={`${prefix}select`}
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(Number(e.target.value))}
                  required
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subcategory Dropdown */}
              {subcategories && subcategories.length > 0 && (
                <div className={`${prefix}formGroup`}>
                  <label className={`${prefix}label`}>Subcategory *</label>
                  <select
                    className={`${prefix}select`}
                    value={selectedSubcategory || ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedSubcategory(value ? Number(value) : null);
                    }}
                    required
                  >
                    <option value="">Select a subcategory...</option>
                    {subcategories.map((subcategory) => (
                      <option key={subcategory.id} value={subcategory.id}>
                        {subcategory.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Name Input */}
              <div className={`${prefix}formGroup`}>
                <label className={`${prefix}label`}>Your Name *</label>
                <input
                  type="text"
                  className={`${prefix}input`}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input (Optional) */}
              <div className={`${prefix}formGroup`}>
                <label className={`${prefix}label`}>Email (Optional)</label>
                <input
                  type="email"
                  className={`${prefix}input`}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Textarea */}
              <div className={`${prefix}formGroup`}>
                <label className={`${prefix}label`}>Message * (Minimum 20 characters)</label>
                <textarea
                  className={`${prefix}textarea`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your issue... (minimum 20 characters)"
                  rows={3}
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className={`${prefix}error`}>
                  {error}
                </div>
              )}

              {/* Buttons */}
              <div className={`${prefix}buttonGroup`}>
                <button
                  type="button"
                  className={`${prefix}btnCancel`}
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`${prefix}btnSubmit`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Start Chat'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatNowModal;