"use client"
import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'

export default function page() {
  const { user } = useAuth()
  console.log(user, "client side user")
  return (
    <div>
      <Link href='/dashboard'>Click me</Link>
    </div>
  )
}
