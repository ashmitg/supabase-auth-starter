import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="grid">
        <Link href="/dashboard" className="border-b bg-gray-800 text-white text-xl rounded-md p-10">
          Navigate to dashboard
        </Link>
      </div>
    </div>
  )
}
