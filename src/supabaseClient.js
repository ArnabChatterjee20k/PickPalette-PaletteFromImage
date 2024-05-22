import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PROJECT_ID,SUPABASE_ANON_KEY } from "./data/data";
const supabaseClient = createClient("https://orbnowfygjgevccwejmz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yYm5vd2Z5Z2pnZXZjY3dlam16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzAzNzEsImV4cCI6MjAzMTcwNjM3MX0.hgLZGtZdl4-9kUpwQWsAXQyaH4KLmJiO3kPBWpzhBgA");
export default supabaseClient