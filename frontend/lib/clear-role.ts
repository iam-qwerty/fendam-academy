/**
 * Clear the fendam_role cookie on sign-out.
 * Called before redirecting to /sign-in.
 */
export function clearRoleCookie() {
  document.cookie = "fendam_role=; path=/; max-age=0; SameSite=Lax";
}
