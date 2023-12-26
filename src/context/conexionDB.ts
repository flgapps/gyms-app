import { SupabaseClient, createClient } from '@supabase/supabase-js';

const options = {
  auth: {
    localStorage: true,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
};

const url: string = import.meta.env.VITE_SUPABASE_URL ?? "";
const key: string = import.meta.env.VITE_SUPABASE_KEY ?? "";

const supabase = createClient(url, key, options);

const client: () => SupabaseClient<any, "public", any> = () => supabase;

export default client;