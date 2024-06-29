"use client"
import { createContext, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import {useAuthStateChange} from '@supabase/ssr'

const initialState = { user: null }
export const AuthContext = createContext(initialState)


export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [state, setState] = useState(initialState)
  const supabase = createClient()

  useEffect(() => {

    const getUser = async () => {
      const { data: user, error } = await supabase.auth.api.getUserByCookie()

      if (error) {
        console.error('Error getting user:', error.message)
        return
      }

      setState({ user })
    }
    getUser()

  }, [])

  useAuthStateChange((event, session) => {
    console.log(`Supabase auth event: ${event}`, session)
    setState({ user: session?.user})
  })



  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}