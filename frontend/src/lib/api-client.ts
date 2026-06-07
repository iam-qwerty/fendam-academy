import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

let cachedToken: string | null = null
let tokenExpiresAt = 0

async function getJwt(): Promise<string | null> {
  if (cachedToken && Date.now() < tokenExpiresAt - 60_000) {
    return cachedToken
  }
  try {
    const result = await authClient.token()
    if (result.data?.token) {
      cachedToken = result.data.token
      tokenExpiresAt = Date.now() + 14 * 60 * 1000
      return cachedToken
    }
  } catch {
    cachedToken = null
    tokenExpiresAt = 0
  }
  return null
}

export async function apiFetch<T = unknown>(
  url: string,
  init?: RequestInit,
): Promise<T> {
  const token = await getJwt()
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init?.headers as Record<string, string>),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  let res = await fetch(`${API_URL}${url}`, { ...init, headers })

  // Silent refresh on 401
  if (res.status === 401) {
    cachedToken = null
    tokenExpiresAt = 0
    const refreshedToken = await getJwt()
    if (refreshedToken) {
      headers.Authorization = `Bearer ${refreshedToken}`
      res = await fetch(`${API_URL}${url}`, { ...init, headers })
    }
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }))
    const message = Array.isArray(error.message)
      ? error.message.join(', ')
      : error.message || 'Request failed'

    switch (res.status) {
      case 401:
        toast.error('Session expired. Please sign in again.')
        setTimeout(() => {
          window.location.href = '/sign-in'
        }, 1500)
        break
      case 403:
        toast.error(`Access denied: ${message}`)
        break
      case 400:
      case 422:
        toast.error(message)
        break
      default:
        if (res.status >= 500) {
          toast.error('Something went wrong. Please try again later.')
        } else {
          toast.error(message)
        }
    }

    throw new ApiError(res.status, message)
  }

  return res.json()
}
