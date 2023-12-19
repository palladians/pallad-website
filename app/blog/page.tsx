import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { getBlogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog - Pallad',
}

export default async function Blog() {
  const posts = getBlogPosts()

  return (
    <main className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 md:py-28">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Blog</h2>
        <div className="mt-8 space-y-10 md:mt-14 md:space-y-14">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="grid grid-cols-1 items-center gap-x-10 gap-y-4 md:grid-cols-2">
                <Image
                  src={`/covers/${post.slug}.jpeg`}
                  alt={post.title}
                  width={360}
                  height={210}
                  className="h-auto w-full rounded-2xl shadow-xl shadow-blue-900/20 transition-transform duration-500 group-hover:scale-105"
                />
                <div>
                  <p className="flex items-center space-x-2 font-medium text-slate-700 dark:text-slate-400">
                    <span>{`${post.readingTime} ${post.readingTime > 1 ? 'mins' : 'min'}`}</span>
                    <span className="block h-2 w-2 rounded-full bg-blue-600" />
                    <span>{post.author}</span>
                    <span className="font-semibold text-blue-600">{post.publishedAt}</span>
                  </p>
                  <h3 className="mt-1 text-xl font-medium leading-8 text-slate-900 dark:text-white md:mt-2 md:text-2xl md:leading-10">
                    {post.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
