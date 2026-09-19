const rawApiBaseUrl = (import.meta.env.VITE_API_URL as string) || 'http://187.77.184.141:8019'

export const API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, '')

export const buildApiUrl = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  // In development, use relative paths to leverage Vite's dev proxy and eliminate CORS issues
  if (import.meta.env.DEV) {
    return normalizedPath
  }
  return `${API_BASE_URL}${normalizedPath}`
}

export const buildWsUrl = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  // In development, use local WebSocket endpoint forwarded by Vite proxy
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
    return `${protocol}//${window.location.host}${normalizedPath}`
  }
  const wsBaseUrl = API_BASE_URL.replace(/^http:/, 'ws:').replace(/^https:/, 'wss:')
  return `${wsBaseUrl}${normalizedPath}`
}