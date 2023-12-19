import type { Metadata } from 'next'

import { AboutSection } from '@/components/about-section'
import { HeroSection } from '@/components/hero-section'
import { TilesSection } from '@/components/tiles-section'
import { WaitlistSection } from '@/components/waitlist-section'

export const metadata: Metadata = {
  title: 'Home - Pallad',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TilesSection />
      <AboutSection />
      <WaitlistSection />
    </main>
  )
}
