
import { z } from "zod"

export const SignInSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(6).max(50),
})


export const SignUpSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(6).max(50),
  confirmPassword: z.string().min(6).max(50),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const ResetPasswordSchema = z.object({
  password: z.string().min(6).max(50),
  confirmPassword: z.string().min(6).max(50),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email().min(2).max(50),
});