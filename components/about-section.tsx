import Image from 'next/image'

import AboutHref from '@/public/about.jpg'

import { IconArrowLeftRight, IconCoins, IconPointerClick } from './icons'

const tiles = [
  {
    Icon: IconArrowLeftRight,
    title: 'Peer-to-Peer Payments Security',
    copy: 'With succinct design any user will be able to run a node on their desktop, or mobile phone making them a participant of the network unlike other wallets that rely on third parties for on-chain data.',
  },
  {
    Icon: IconPointerClick,
    title: 'Interact with zkApps',
    copy: 'Say goodbye to difficulty interacting with zkApps, Pallad allows seamless integration with zkApps. Our incoming Mina RPC will make your zkApp DevX easier and more enjoyable.',
  },
  {
    Icon: IconCoins,
    title: 'Staking',
    copy: "Contribute to the network's security by staking with your favourite stake pool. Earn rewards by delegating your funds to block validators. Delegate to any pool you like.",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-slate-100 bg-indigo-50 px-5 py-16 dark:border-slate-800 dark:bg-slate-900 sm:px-8 sm:py-28"
    >
      <Image
        src={AboutHref}
        alt="Black and white abstract background with intersecting lines creating a mesmerizing pattern."
        className="absolute left-0 top-0 h-full w-full mix-blend-soft-light"
      />
      <div className="container relative z-10 mx-auto leading-8 text-slate-900 dark:text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Revolutionizing Payments and Finance with Cutting-edge Technology
          </h2>
          <p className="mt-8">
            We&apos;re leveraging the power of Mina blockchain to provide a secure, efficient, and
            seamless experience. Our wallet is designed to keep you in control of your assets
            uncensorable with full-node security thanks to Mina&apos;s succinct design and enriched
            with features crafted to ensure the ultimate convenience.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="rounded-md border border-slate-100 bg-white/50 p-4 shadow backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div className="flex items-center space-x-2">
                <tile.Icon className="h-6 w-6" />
                <h3 className="text-lg font-semibold">{tile.title}</h3>
              </div>
              <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{tile.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
