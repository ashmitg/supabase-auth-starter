"use client"
import { AuthProvider } from "../../context/auth-context";
import { SideNavbar } from "./(layout)/SideNavbar";
export default function Layout({children}: {children: React.ReactNode}) {

  return (
    <AuthProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[300px_1fr]">
        <SideNavbar />
        {children}
      </div>
    </AuthProvider>
  )
}