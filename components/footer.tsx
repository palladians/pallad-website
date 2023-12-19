import Link from 'next/link'

import { IconDiscord, IconGithub, IconTwitter } from '@/components/icons'

const menu = [
  { href: '/', label: 'FAQ' },
  { href: '/', label: 'Support' },
  { href: '/blog', label: 'Blog' },
]

const socials = [
  { href: 'https://twitter.com/pallad_xyz', label: 'Twitter', Icon: IconTwitter },
  { href: 'https://github.com/palladians/pallad', label: 'GitHub', Icon: IconGithub },
  { href: 'https://discord.com/invite/ExzzfTGUnB', label: 'Discord', Icon: IconDiscord },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-6 py-16 text-center text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white sm:px-8 sm:py-28">
      <p>
        Pallad, proudly presented by{' '}
        <a
          href="https://palladians.xyz/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold hover:underline"
        >
          Palladians
        </a>
        .
      </p>
      <nav className="mt-8 sm:mt-10">
        <ul className="flex justify-center space-x-6 text-sm font-medium sm:space-x-10">
          {menu.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="block p-2 hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="mt-8 sm:mt-10">
        <ul className="flex justify-center space-x-6 sm:space-x-8">
          {socials.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noreferrer">
                <item.Icon className="h-6 w-6" />
                <span className="sr-only">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
