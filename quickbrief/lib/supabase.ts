import { createClient } from '@supabase/supabase-js'
import { env } from 'process'

// Create a single supabase client for interacting with your database
export const supabase = createClient(process.env.NEXT_PUBLIC_API_URL!, process.env.NEXT_PUBLIC_API_KEY!)
