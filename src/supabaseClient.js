import { createClient } from "@supabase/supabase-js";
const supabaseClient = createClient("", "");
export default supabaseClient