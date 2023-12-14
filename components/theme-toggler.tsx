'use client'

import { useLayoutEffect, useState } from 'react'

import { IconMoonStar, IconSunDim } from '@/components/icons'

export function ThemeToggler() {
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  const savedTheme = localStorage.getItem('theme') || preferredTheme
  const [theme, setTheme] = useState<'dark' | 'light'>(savedTheme === 'dark' ? 'dark' : 'light')

  useLayoutEffect(() => {
    const html = document.querySelector('html')
    html?.classList.remove(theme === 'dark' ? 'light' : 'dark')
    html?.classList.add(theme === 'dark' ? 'dark' : 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      className="ml-1 rounded-md p-2 text-slate-900 transition-colors hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <IconSunDim className="h-6 w-6" /> : <IconMoonStar className="h-6 w-6" />}
    </button>
  )
}
