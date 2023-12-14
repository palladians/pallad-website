import { cookies } from 'next/headers'

import { IconMoonStar, IconSunDim } from '@/components/icons'

export function ThemeToggler() {
  const isThemeDark = cookies().get('theme')?.value === 'dark'

  const changeTheme = async () => {
    'use server'
    cookies().set('theme', isThemeDark ? 'light' : 'dark')
  }

  return (
    <form action={changeTheme}>
      <button
        type="submit"
        className="ml-1 rounded-md p-2 text-slate-900 transition-colors hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
      >
        {isThemeDark ? <IconSunDim className="h-6 w-6" /> : <IconMoonStar className="h-6 w-6" />}
      </button>
    </form>
  )
}
