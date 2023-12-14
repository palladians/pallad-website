'use client'

import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'

import { IconMoonStar, IconSunDim } from '@/components/icons'

function useMounted() {
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export function ThemeToggler() {
  const mounted = useMounted()
  const { theme, systemTheme, setTheme } = useTheme()

  if (!mounted) return null

  const isThemeDark = theme === 'system' ? systemTheme === 'dark' : theme === 'dark'

  return (
    <button
      type="submit"
      className="ml-1 rounded-md p-2 text-slate-900 transition-colors hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
      onClick={() => setTheme(isThemeDark ? 'light' : 'dark')}
    >
      {isThemeDark ? <IconSunDim className="h-6 w-6" /> : <IconMoonStar className="h-6 w-6" />}
    </button>
  )
}
