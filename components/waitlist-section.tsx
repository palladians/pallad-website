'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

import { addEmailToWaitlist } from '@/lib/actions'

function Circle({ className }: { className: string }) {
  return (
    <div className={`absolute h-[600px] w-[800px] rounded-full blur-[64px] ${className}`}></div>
  )
}

export function WaitlistSection() {
  const [pending, setPending] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') || '').trim()
    const name = String(formData.get('name') || '').trim()

    setPending(true)
    const { message } = await addEmailToWaitlist({ email, name })
    setPending(false)

    alert(message)
  }

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
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="flex space-x-2">
            <input
              type="email"
              name="email"
              className="w-full rounded-md border border-slate-100 px-3 py-2 text-sm text-slate-700 shadow dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="E-mail address"
              required
            />
            <input type="hidden" name="name" autoComplete="off" />
            <button
              type="submit"
              className="whitespace-nowrap rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              disabled={pending}
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
