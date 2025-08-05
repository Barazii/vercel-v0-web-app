import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Auth helpers
export const signUp = async (email: string, password: string, metadata?: Record<string, any>) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata
    }
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

// Newsletter subscription helper
export const subscribeToNewsletter = async (
  email: string, 
  type: 'journalism' | 'ecommerce',
  source?: string
) => {
  const { data, error } = await supabase
    .from('newsletter_subscriptions')
    .insert([
      {
        email,
        subscription_type: type,
        source: source || 'website',
        subscribed_at: new Date().toISOString(),
        is_active: true
      }
    ])
    .select()

  return { data, error }
}

// Contact form helper
export const submitContactForm = async (formData: {
  name: string
  email: string
  subject: string
  message: string
  type?: string
}) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        ...formData,
        submitted_at: new Date().toISOString(),
        status: 'new'
      }
    ])
    .select()

  return { data, error }
}
