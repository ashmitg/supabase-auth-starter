"use client"
import { createClient } from '@/utils/supabase/client'
import { useToast } from "@/components/ui/use-toast"
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function useSignup() {
  const [Usererror, setUserError] = useState<string>("")
  const [loading, SetLoading] = useState(false);
  const [success, SetSuccess] = useState(false);
  const supabase = createClient()
  const { toast } = useToast()
  const router = useRouter()
  const Signup = async (dataval: { email: string, password: string }) => {
    SetLoading(true);
    setUserError("")
    const userdata = {
      email: dataval.email,
      password: dataval.password,
    }

    const { data, error } = await supabase.auth.signUp(userdata)
    console.log(data, "data")
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      toast({
        title: "Error",
        description: "Sorry, this user already exists",
      })
      setUserError("Sorry, this user already exists")
      SetLoading(false)
      return;
    }

    if (error?.message) {
      toast({
        description: error?.message,
      })
      setUserError(error.message)
      SetLoading(false);
      return;
    } else {
      toast({
        description: "Successfully signed up. Please check your email for verification.",
      })
      SetLoading(false);
      SetSuccess(true);

    }
  }

  return { Signup, Usererror, loading, success }

}