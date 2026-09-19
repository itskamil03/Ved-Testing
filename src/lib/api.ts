const rawApiBaseUrl = (import.meta.env.VITE_API_URL as string) || ''

export const API_BASE_URL = rawApiBaseUrl ? rawApiBaseUrl.replace(/\/+$/, '') : ''

export const buildApiUrl = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  // If an explicit API base URL is configured in environment, use it
  if (API_BASE_URL) {
    // If the browser is on HTTPS, don't use insecure http:// base URL directly (causes browser Mixed Content block)
    if (typeof window !== 'undefined' && window.location.protocol === 'https:' && API_BASE_URL.startsWith('http://')) {
      return normalizedPath
    }
    return `${API_BASE_URL}${normalizedPath}`
  }
  // Otherwise use relative paths (works with Vite dev proxy and Vercel/Netlify rewrites)
  return normalizedPath
}

export const buildWsUrl = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  if (API_BASE_URL) {
    const wsBaseUrl = API_BASE_URL.replace(/^http:/, 'ws:').replace(/^https:/, 'wss:')
    return `${wsBaseUrl}${normalizedPath}`
  }
  if (typeof window !== 'undefined') {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
    return `${protocol}//${window.location.host}${normalizedPath}`
  }
  return `ws://187.77.184.141:8019${normalizedPath}`
}