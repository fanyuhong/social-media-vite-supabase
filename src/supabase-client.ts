import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://abgsymhazklpyrdbhekf.supabase.co";

//const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZ3N5bWhhemtscHlyZGJoZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTA2MTAsImV4cCI6MjA2OTU2NjYxMH0.BnLsJBMo_qBpEdomHAQorDQU94jZejjYCjzMicsLDE8";

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseURL, supabaseAnonKey);