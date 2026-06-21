// ============================================================
// Supabase client — STUB (prepared, not yet active).
// Wired in a later step. No-op until env vars + the
// @supabase/supabase-js package are present.
// ============================================================

export const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '';

let _client = null;

/**
 * Lazily create the Supabase client. Returns null until both env vars
 * are set. The dynamic import is @vite-ignore'd so the build does not
 * require the package to be installed yet.
 */
export async function getSupabaseClient() {
  if (_client) return _client;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  try {
    // Variable specifier keeps the bundler from resolving the package
    // before it is installed (Supabase wiring is a later step).
    const pkg = '@supabase/supabase-js';
    const { createClient } = await import(/* @vite-ignore */ pkg);
    _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return _client;
  } catch {
    // Package not installed yet — stay in mock mode.
    return null;
  }
}
