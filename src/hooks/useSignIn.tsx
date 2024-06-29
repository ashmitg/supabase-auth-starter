"use client"
import { createClient } from '@/utils/supabase/client'
import { useToast } from "@/components/ui/use-toast"
import {useState} from "react"
import { useRouter } from 'next/navigation'


export function useSignin() {
  const router = useRouter()
  const [UserError, setUserError] = useState<string>("")
  const [loading, SetLoading] = useState(false);
  const { toast } = useToast()
  const supabase = createClient()

  const Signin = async (formData: {email: string, password: string}) => {
    SetLoading(true);
    setUserError("")
    const data = {
      email: formData.email,
      password: formData.password,
      
    }
    const { error } = await supabase.auth.signInWithPassword(data)

    if(error?.message){
      toast({
        title: "Error",
        description: error?.message,
      })
      setUserError(error.message)
    }else{  
      router.push('/dashboard')
    }
    SetLoading(false);
  }


  return { Signin, UserError, loading }
}
