import Image from 'next/image'
import Link from 'next/link'

import HeroHref from '@/public/hero.jpeg'

export function HeroSection() {
  return (
    <section className="relative bg-white dark:bg-slate-950">
      <Image
        src={HeroHref}
        alt="An abstract painting of mountains and a blue sky, capturing the beauty of nature in vibrant colors."
        priority={true}
        className="absolute left-0 top-0 h-full w-full mix-blend-soft-light"
      />
      <div className="relative z-10 mx-auto max-w-2xl px-5 py-32 text-center leading-8 sm:px-8">
        <h2 className="text-3xl font-extrabold sm:text-5xl">
          <span className="text-slate-900 dark:text-white">Discover the Future of</span>{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent sm:block">
            Web3 with Pallad.
          </span>
        </h2>
        <p className="mt-6 text-slate-900 dark:text-white">
          Unlock the power of the world&apos;s lightest blockchain. Pallad brings top-tier
          engineering, user-friendly design, and open-source principles together in one platform.
          Take your first step into the future and experience Web3 like never before.
        </p>
        <div className="mt-8 items-center justify-center space-x-0 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
          <Link
            href="/#waitlist"
            className="block rounded-md bg-slate-800 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Join Waitlist
          </Link>
          <Link
            href="/#about"
            className="block rounded-md border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  )
}
