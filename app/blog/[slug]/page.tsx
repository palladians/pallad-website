import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getBlogPost } from '@/data/blog'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  return { title: post ? `${post.title} - Pallad` : 'Pallad' }
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-white dark:bg-slate-950">
      <article className="mx-auto w-full max-w-3xl space-y-6 px-5 py-10 md:space-y-8 md:py-16">
        <Image
          src={`/covers/${post.slug}.jpeg`}
          alt={post.title}
          width={768}
          height={400}
          className="h-auto w-full rounded-2xl shadow-xl shadow-blue-900/20"
        />
        <p className="flex items-center space-x-2 font-medium text-slate-700 dark:text-slate-400">
          <span>{`${post.readingTime} ${post.readingTime > 1 ? 'mins' : 'min'}`}</span>
          <span className="block h-2 w-2 rounded-full bg-blue-600" />
          <span>{post.author}</span>
          <span className="font-semibold text-blue-600">{post.publishedAt}</span>
        </p>
        <h1 className="text-4xl font-semibold !leading-tight text-slate-900 dark:text-white md:text-5xl">
          {post.title}
        </h1>
        <div
          className="prose prose-slate max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  )
}
