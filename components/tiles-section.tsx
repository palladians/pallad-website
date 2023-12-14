const tiles = [
  {
    title: 'Unparalleled Excellence',
    copy: 'Discover unrivaled performance and convenience with the leading Mina wallet.',
  },
  {
    title: 'Revolutionary Technology',
    copy: 'Enjoy zero-knowledge technology, a seamless transaction experience and unparalleled security.',
  },
  {
    title: 'User-Focused',
    copy: 'Join the community of users who love our intuitive and user-friendly design.',
  },
]

export function TilesSection() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="container mx-auto grid gap-4 px-5 py-8 sm:px-8 md:grid-cols-3 md:py-16">
        {tiles.map((tile) => (
          <div
            key={tile.title}
            className="rounded-md border border-slate-200 p-4 shadow dark:border-slate-800"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{tile.title}</h3>
            <p className="mt-1 leading-7 text-slate-700 dark:text-slate-300">{tile.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
