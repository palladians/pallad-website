'use server'

import { collections, pb } from '@/app/data/pocketbase'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export async function addEmailToWaitlist({ email, name }: { email: string; name: string }) {
  if (name.length > 0) return { message: 'Something went wrong, try again later. ❌' } // "name" is a honeypot field
  if (!email.length) return { message: 'Please enter your e-mail address. ❌' }
  if (!emailRegex.test(email)) return { message: 'Please enter a valid e-mail address. ❌' }

  try {
    await pb.collection(collections.waitlist).create({ email })
    return { message: "You've been successfully signed up for the waitlist! ✅" }
  } catch (err) {
    return { message: 'Something went wrong, try again later. ❌' }
  }
}
