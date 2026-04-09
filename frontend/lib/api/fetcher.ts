import { authClient } from "@/lib/auth-client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// In-memory JWT cache to avoid fetching on every request
let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getJwt(): Promise<string | null> {
  // Return cached token if it's still valid (with 60s buffer)
  if (cachedToken && Date.now() < tokenExpiresAt - 60_000) {
    return cachedToken;
  }

  try {
    const result = await authClient.token();
    if (result.data?.token) {
      cachedToken = result.data.token;
      // JWT plugin defaults to 15min expiry; cache for 14min
      tokenExpiresAt = Date.now() + 14 * 60 * 1000;
      return cachedToken;
    }
  } catch {
    // If token fetch fails, clear cache
    cachedToken = null;
    tokenExpiresAt = 0;
  }
  return null;
}

/**
 * Authenticated fetch wrapper for backend API calls.
 * - Gets a JWT from better-auth's JWT plugin (asymmetric key, JWKS-verifiable)
 * - Injects as Bearer token for NestJS
 * - Handles 401 with token refresh + retry
 * - Throws ApiError for non-OK responses per spec §12.3
 */
export async function apiFetch<T = unknown>(
  url: string,
  init?: RequestInit,
): Promise<T> {
  const token = await getJwt();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(init?.headers as Record<string, string>),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let res = await fetch(`${API_URL}${url}`, { ...init, headers });

  // Silent refresh on 401
  if (res.status === 401) {
    // Invalidate cache and retry
    cachedToken = null;
    tokenExpiresAt = 0;
    const refreshedToken = await getJwt();
    if (refreshedToken) {
      headers.Authorization = `Bearer ${refreshedToken}`;
      res = await fetch(`${API_URL}${url}`, { ...init, headers });
    }
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new ApiError(res.status, error.message || "Request failed");
  }

  return res.json();
}
