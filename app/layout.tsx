'use client';

import { Karla } from 'next/font/google'
import './globals.css'
import PageWrapper from '@/components/page-wrapper'
import { useState } from 'react'
import Header from '@/components/header';
import { SideBar } from '@/components/side-bar';

// const inter = Inter({ subsets: ['latin'] })


const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  return (
    <html lang="en">
      <body className={karla.className}>
        <div className='min-h-screen flex'>
          <SideBar setToggleCollapse={setToggleCollapse} toggleCollapse={toggleCollapse} />
          <Header setToggleCollapse={setToggleCollapse} toggleCollapse={toggleCollapse} />
          <PageWrapper toggleCollapse={toggleCollapse}>
            {children}
          </PageWrapper>
        </div>
      </body>
    </html>
  )
}
