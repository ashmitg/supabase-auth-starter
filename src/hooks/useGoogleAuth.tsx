"use client"

import { createClient } from '@/utils/supabase/client' 

export function useGoogleAuth() {
  const supabase = createClient();

  const LogInGoogle = async () => {
    const {error, data} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
  }

  return { LogInGoogle }
}