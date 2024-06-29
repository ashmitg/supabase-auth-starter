"use client"

import Link from "next/navigation"
import clsx from "clsx"
import { usePathname } from "next/navigation"

export function SideNavbar() {
  return (
    <div className="lg:block hidden border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex max-h-[65px] items-center border-b px-3 w-full">
          <span>Dashboard</span>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid grid-cols-1 ">
            
          </nav>
        </div>
      </div>
    </div>
  )
}