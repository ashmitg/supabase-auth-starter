"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignInSchema } from "@/zodforms/authentication"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'


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
import { useSignin } from "@/hooks/useSignIn"


export function Signin() {
  const { LogInGoogle } = useGoogleAuth()
  const {Signin, UserError, loading} = useSignin()
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof SignInSchema>) {
    await Signin(data);
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>

        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
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
                  <FormDescription className="text-rose-800">
                    {UserError}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="my-3 w-full">
              {loading ? "Submitting..." : "Sign In"}
            </Button>
          </form>
        </Form>
        <Button onClick={LogInGoogle} disabled={loading} className="my-3 w-full">
          <FcGoogle className="mr-2 w-4 h-4" />
          <span> Sign In with Google</span>
        </Button>
        <div className="text-gray-800 mt-4 text-center text-sm">
          Forgot your password?{" "}
          <Link href="/forgot-password" className="underline">
            Reset Password
          </Link>
        </div>
      </CardContent>
    </Card>
  )

}