"use client"
import {
  Dialog,
  DialogClose,
} from "@/components/ui/dialog"
import { Banknote, Folder, HomeIcon, Settings } from 'lucide-react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { FaTasks } from 'react-icons/fa'
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeButton } from "../theme/ThemeButton"

export function TopNavbar({ children, breadcrumb }: { children: React.ReactNode, breadcrumb: React.ReactNode}) {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[55px] items-center gap-4 border-b px-3 justify-between">
        <Dialog>
          <SheetTrigger className="min-[1024px]:hidden p-2 transition items-end">
            <HamburgerMenuIcon />
            <Link href="/dashboard">
              <span className="sr-only">Home</span>
            </Link>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href="/">
                <SheetTitle>Nextjs Starter Kit</SheetTitle>
              </Link>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/projects">
                  <Button variant="outline" className="w-full">
                    <Folder className="mr-2 h-4 w-4" />
                    Projects
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/kanban">
                  <Button variant="outline" className="w-full">
                    <FaTasks className="mr-2 h-4 w-4" />
                    Kanban
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/finance">
                  <Button variant="outline" className="w-full">
                    <Banknote className="mr-2 h-4 w-4" />
                    Finance
                  </Button>
                </Link>
              </DialogClose>
              <Separator className="my-3" />
              <DialogClose asChild>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        {breadcrumb}
        <ThemeButton />

      </header>
      
      {children}
    </div>
  )
}