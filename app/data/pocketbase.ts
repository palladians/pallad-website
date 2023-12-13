import PocketBase from 'pocketbase'

export const collections = {
  waitlist: 'waitlist',
}

export const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || '')
