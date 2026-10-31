import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, ArrowUpRight } from 'lucide-react'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const projects = await getProjects()
    const slugs = projects.map(project => ({ slug: project.slug }))

    return slugs
}

// SEO
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)
    if (!project) notFound()
    const image = project.metadata.image

    return {
        title: project.metadata.title,
        description: project.metadata.summary,
        keywords: project.metadata.keywords, // 👈 here it is used
        openGraph: {
            title: project.metadata.title,
            description: project.metadata.summary,
            type: 'article',
            url: `https://ukashaanwerali.dev/projects/${slug}`,
            ...(image
                ? {
                      images: [
                          {
                              url: image,
                              alt: project.metadata.title
                          }
                      ]
                  }
                : {})
        },
        twitter: {
            card: 'summary_large_image',
            title: project.metadata.title,
            description: project.metadata.summary,
            ...(image ? { images: [image] } : {})
        }
    }
}

export default async function Project({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    const { metadata, content } = project
    const { title, image, author, publishedAt, category, stack, links } =
        metadata

    return (
        <section className='pt-32 pb-28 md:pt-36'>
            <div className='container max-w-3xl'>
                <Link
                    href='/projects'
                    className='text-muted-foreground hover:text-foreground mb-10 inline-flex items-center gap-2 text-sm transition-colors'
                >
                    <ArrowLeftIcon className='h-4 w-4' />
                    <span>Back to projects</span>
                </Link>

                {image && (
                    <div className='relative mb-8 h-96 w-full overflow-hidden rounded-lg'>
                        <Image
                            src={image}
                            alt={title || ''}
                            className='object-cover'
                            fill
                        />
                    </div>
                )}

                <header>
                    {category && <p className='eyebrow'>{category}</p>}
                    <h1 className='title mt-3'>{title}</h1>
                    <p className='meta mt-4'>
                        {author}
                        {publishedAt ? ` / ${formatDate(publishedAt)}` : ''}
                    </p>

                    {stack && <p className='meta mt-5'>{stack.join(' / ')}</p>}

                    {links && links.length > 0 && (
                        <div className='mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm'>
                            {links.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className='text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors'
                                >
                                    {link.label}
                                    <ArrowUpRight className='h-3.5 w-3.5' />
                                </a>
                            ))}
                        </div>
                    )}
                </header>

                <main className='prose prose-lg dark:prose-invert mt-16'>
                    <MDXContent source={content} />
                </main>
            </div>
        </section>
    )
}
