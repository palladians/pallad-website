import { AboutSection } from './components/about-section'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { HeroSection } from './components/hero-section'
import { TilesSection } from './components/tiles-section'
import { WaitlistSection } from './components/waitlist-section'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TilesSection />
      <AboutSection />
      <WaitlistSection />
      <Footer />
    </>
  )
}
