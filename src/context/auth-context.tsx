"use client"
import {useContext, createContext, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
interface AuthContextType {
  user: any
}


export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<AuthContextType>({ user: null })
  const supabase = createClient()

  useEffect(() => {

    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      console.log(data, error)
      if (error) {
        console.error('Error getting user:', error.message)
        return
      }

      setState({ user: data })
    }
    //getUser()

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(`Supabase auth event: ${event}`, session)
      if(!session?.user){
        router.push('/signin')
      }
      setState({ user: session?.user})
    })

    return () => {
      data.subscription.unsubscribe()
    }

  }, [])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}


export function useAuth() {
  const Context = useContext(AuthContext)
  if(!Context) throw new Error('useAuth must be used within an AuthProvider');

  return Context;

}