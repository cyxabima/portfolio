import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from 'lucide-react'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const projects = await getProjects()
    const slugs = projects.map(project => ({ slug: project.slug }))

    return slugs
}

// SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug)
    if (!project) notFound();
    return {
        title: project.metadata.title,
        description: project.metadata.summary,
        keywords: project.metadata.keywords, // 👈 here it is used
        openGraph: {
            title: project.metadata.title,
            description: project.metadata.summary,
            type: 'article',
            url: `https://ukashaanwer.tech/projects/${slug}`,
            images: [
                {
                    url: project.metadata.image,
                    alt: project.metadata.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.metadata.title,
            description: project.metadata.summary,
            images: [project.metadata.image],
        },
    };

}

export default async function Project({ params }:
    {
        params: Promise<{ slug: string }>
    }) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    const { metadata, content } = project
    const { title, image, author, publishedAt } = metadata

    return (
        <section className='pb-24 pt-32'>
            <div className='container max-w-3xl'>
                <Link
                    href='/projects'
                    className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
                >
                    <ArrowLeftIcon className='h-5 w-5' />
                    <span>Back to projects</span>
                </Link>

                {image && (
                    <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
                        <Image
                            src={image}
                            alt={title || ''}
                            className='object-cover'
                            fill
                        />
                    </div>
                )}

                <header>
                    <h1 className='title'>{title}</h1>
                    <p className='mt-3 text-xs text-muted-foreground'>
                        {author} / {formatDate(publishedAt ?? '')}
                    </p>
                </header>

                <main className='prose mt-16 dark:prose-invert'>
                    <MDXContent source={content} />
                </main>
            </div>
        </section>
    )
}