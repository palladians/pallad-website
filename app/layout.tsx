import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home - Pallad',
  description: 'Discover the Future of Web3 with Pallad.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isThemeDark = cookies().get('theme')?.value === 'dark'

  return (
    <html lang="en" className={`scroll-smooth ${isThemeDark ? 'dark' : 'light'}`}>
      <body className={`${inter.className} bg-white antialiased dark:bg-slate-950`}>
        {children}
      </body>
    </html>
  )
}
