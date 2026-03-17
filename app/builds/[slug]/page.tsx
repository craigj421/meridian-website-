import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllBuilds, getBuildBySlug } from '@/lib/builds'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { TagChip } from '@/components/ui/TagChip'
import { DevLog } from '@/components/builds/DevLog'

export async function generateStaticParams() {
  return getAllBuilds().map(b => ({ slug: b.slug }))
}

// In Next.js 14.2+, params is a Promise — must be awaited.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const build = getBuildBySlug(slug)
  if (!build) return {}
  return {
    title: `${build.title} — Meridian`,
    description: build.description,
  }
}

export default async function BuildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const build = getBuildBySlug(slug)
  if (!build) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <StatusBadge status={build.status} />
          <span className="hud-text text-text-muted">{build.date_started}</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary mb-4">
          {build.title}
        </h1>
        <p className="text-text-muted text-lg">{build.description}</p>
      </div>

      {/* Hero image */}
      {build.hero_image && (
        <div className="aspect-video bg-panel relative overflow-hidden rounded-sm mb-12">
          <img src={build.hero_image} alt={build.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {build.tags.map(tag => (
          <TagChip key={tag} label={tag} />
        ))}
      </div>

      {/* MDX body */}
      <div className="prose prose-invert prose-sm max-w-none mb-16">
        <MDXRemote source={build.content} />
      </div>

      {/* Devlog */}
      {build.devlog && build.devlog.length > 0 && (
        <DevLog entries={build.devlog} />
      )}
    </div>
  )
}
