'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { useToast } from '@/components/ui/use-toast'

export function SubmitButton({ rendertext, buttontext, toastmessage }: { rendertext: string, buttontext: string, toastmessage: string }) {
  const { pending } = useFormStatus()
  const [emailSent, setEmailSent] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (pending === true) {
      setEmailSent(true)
      if (toastmessage.length > 0) {
        toast({
          description: toastmessage,
        })
      }
    }

  }, [pending])


  return (
    <Button className="w-full" type="submit" disabled={pending || emailSent}>
      {emailSent ? rendertext : buttontext}
    </Button>
  )
}