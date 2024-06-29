"use client"
import { AuthProvider } from "../../context/auth-context";

export default function Layout({children}: {children: React.ReactNode}) {

  return (
    <AuthProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[300px_1fr]">
        {children}
      </div>
    </AuthProvider>
  )
}