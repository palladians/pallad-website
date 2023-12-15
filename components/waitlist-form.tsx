'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

import { collections, pb } from '@/data/pocketbase'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const generalMessage = 'Something went wrong. Please try again later.'

export function WaitlistForm() {
  const [pending, setPending] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '') // honeypot
    const email = String(formData.get('email') || '').trim()

    if (name.length) return alert(generalMessage)
    if (!email.length) return alert('Please enter your email address.')
    if (!emailRegex.test(email)) return alert('Please enter a valid email address.')

    setPending(true)
    try {
      await pb.collection(collections.waitlist).create({ email })
      form.reset()
      alert("You've been successfully added to the waitlist! ✅")
    } catch (err) {
      console.error(err)
      alert(generalMessage)
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6">
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
  )
}
