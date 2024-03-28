import Image from 'next/image'
import Link from 'next/link'

import IconHref from '@/app/icon.svg'
import { IconDiscord, IconGithub, IconTwitter } from '@/components/icons'
import { ThemeToggler } from '@/components/theme-toggler'

const menu = [
  { href: '/', label: 'FAQ' },
  { href: '/', label: 'Support' },
  { href: '/blog', label: 'Blog' },
]

const socials = [
  { href: 'https://twitter.com/palladHQ', label: 'Twitter', Icon: IconTwitter },
  { href: 'https://github.com/palladians/pallad', label: 'GitHub', Icon: IconGithub },
  { href: 'https://discord.com/invite/ExzzfTGUnB', label: 'Discord', Icon: IconDiscord },
]

export function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/75 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/75">
      <div className="container mx-auto flex h-16 items-center px-5 sm:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={IconHref} alt="Pallad logo" width={28} />
          <span className="font-bold text-slate-900 dark:text-white">Pallad</span>
        </Link>
        <nav className="ml-10">
          <ul className="flex space-x-6 text-sm font-medium text-slate-500 dark:text-white">
            {menu.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-slate-600 dark:hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex">
          <nav className="hidden sm:block">
            <ul className="hidden items-center space-x-1 sm:flex">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-md px-4 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <item.Icon className="h-6 w-6 text-slate-900 dark:text-white" />
                    <span className="sr-only">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggler />
        </div>
      </div>
    </header>
  )
}
