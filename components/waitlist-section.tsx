import { WaitlistForm } from './waitlist-form'

function Circle({ className }: { className: string }) {
  return (
    <div className={`absolute h-[600px] w-[800px] rounded-full blur-[64px] ${className}`}></div>
  )
}

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden border-t border-slate-100 bg-white px-5 py-16 dark:border-slate-800 dark:bg-slate-950 sm:px-8 sm:py-36"
    >
      <Circle className="-top-24 left-0 bg-indigo-500/5" />
      <Circle className="right-0 top-0 bg-cyan-500/5" />
      <div className="relative z-10 mx-auto max-w-md text-center leading-8">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Get Started Now</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">
          Join Pallad&apos;s waitlist to earn access before the official launch and explore it.
        </p>
        <WaitlistForm />
      </div>
    </section>
  )
}
