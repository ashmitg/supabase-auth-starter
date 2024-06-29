"use client"

import {createClient} from "@/utils/supabase/client"


export function useSignOut() {

  const supabase = createClient()

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return { signOut }
}