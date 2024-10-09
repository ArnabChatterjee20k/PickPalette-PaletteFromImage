import { createBrowserClient, } from "@supabase/ssr";

export function createClient({ SUPABASE_URL, SUPABASE_ANON_KEY }) {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

