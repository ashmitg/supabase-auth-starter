"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignUpSchema } from "@/zodforms/authentication"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useGoogleAuth } from "@/hooks/useGoogleAuth"
import { FcGoogle } from "react-icons/fc";
import { useSignup } from "@/hooks/useSignup"

export function Signup() {
  const { LogInGoogle } = useGoogleAuth()
  const { Signup, Usererror, loading, success } = useSignup()
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof SignUpSchema>) {
    console.log(data, "data submitted client")
    await Signup(data)
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Sign up to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription className="text-rose-700">
                    {Usererror}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="my-3 w-full" disabled={success || loading}>
              {success ? "Awaiting Confirmation..." : (loading ? "Submitting..." : "Sign Up")}
            </Button>
          </form>
        </Form>
        <Button onClick={LogInGoogle} disabled={success || loading} className="my-3 w-full">
          <FcGoogle className="mr-2 w-4 h-4" />
          <span> Sign Up with Google</span>
        </Button>
      </CardContent>
    </Card>
  )

}