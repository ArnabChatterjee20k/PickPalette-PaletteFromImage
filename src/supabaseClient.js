import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PROJECT_ID,SUPABASE_ANON_KEY } from "./data/data";
const supabaseClient = createClient(SUPABASE_PROJECT_ID, SUPABASE_ANON_KEY);
export default supabaseClient