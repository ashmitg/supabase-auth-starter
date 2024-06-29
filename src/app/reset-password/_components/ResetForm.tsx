"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SubmitButton } from "@/components/actionButton/AuthOnSubmit"
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ResetPasswordSchema } from "@/zodforms/authentication"

export function InputForm({ serverSubmit }: { serverSubmit: (data: FormData) => void }){
  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    mode: "onChange",
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })


  return (
    <Card className="bg-background w-full max-w-xl max-h-fit py-10">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
        <CardDescription className="text-center">
          Choose a Password to reset your account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-cols justify-center">
        <Form {...form}>
          <form action={serverSubmit}
            className="w-2/3 space-y-6">
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

                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton rendertext={"Reseting..."} buttontext="Reset Password" toastmessage={""}/>
          </form>
        </Form>
      </CardContent>

    </Card>
  )
}
