import React from 'react'
import { TopNavbar } from '@/components/navigation/TopNavbar'
import { DashboardBreadCrumb } from './_components/DashboardBreadCrumb'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <TopNavbar breadcrumb ={<DashboardBreadCrumb/>}>
      {children}
    </TopNavbar>
  )
}
