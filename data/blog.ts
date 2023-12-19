import fm from 'front-matter'
import fs from 'fs'
import { marked } from 'marked'
import path from 'path'

type Attributes = {
  title: string
  author: string
  publishedAt: string
}

export function getBlogPosts() {
  const dir = path.join(process.cwd(), 'content')
  const mdFiles = fs.readdirSync(dir).filter((file) => path.extname(file) === '.md')

  return mdFiles
    .map((file) => {
      const rawContent = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { attributes, body } = fm<Attributes>(rawContent)
      return {
        ...attributes,
        html: marked(body),
        readingTime: Math.ceil(body.split(' ').length / 200), // 200 words per minute
        slug: path.basename(file, path.extname(file)),
      }
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug)
}
