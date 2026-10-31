import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import type { ProjectMetadata } from '@/lib/projects'

function metaLabel(project: ProjectMetadata) {
    if (project.category) return project.category

    if (project.publishedAt) {
        const date = new Date(project.publishedAt)
        if (!Number.isNaN(date.getTime())) {
            return String(date.getFullYear())
        }
    }

    return undefined
}

export default function ProjectList({
    items,
    headingLevel = 'h4'
}: {
    items: ProjectMetadata[]
    headingLevel?: 'h3' | 'h4'
}) {
    const Heading = headingLevel

    return (
        <ul className='divide-border border-border mt-4 divide-y border-t'>
            {items.map(project => {
                const meta = metaLabel(project)

                return (
                    <li key={project.slug} className='py-8 md:py-10'>
                        <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'>
                            <Heading className='font-serif text-xl font-semibold'>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className='hover:text-muted-foreground transition-colors'
                                >
                                    {project.title}
                                </Link>
                            </Heading>
                            {meta && (
                                <span className='meta shrink-0'>{meta}</span>
                            )}
                        </div>

                        <p className='text-foreground/70 mt-3 max-w-2xl text-[15px] leading-7'>
                            {project.summary}
                        </p>

                        {project.stack && (
                            <p className='meta mt-3'>
                                {project.stack.join(' / ')}
                            </p>
                        )}

                        <div className='mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm'>
                            <Link
                                href={`/projects/${project.slug}`}
                                className='text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors'
                            >
                                Case study
                                <ArrowRight className='h-3.5 w-3.5' />
                            </Link>

                            {project.links?.map(link => (
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
                    </li>
                )
            })}
        </ul>
    )
}
