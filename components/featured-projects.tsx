import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { getFeaturedProjects } from '@/lib/projects'
import type { FeaturedGroup } from '@/lib/projects'
import ProjectList from '@/components/project-list'

const groups: { key: FeaturedGroup; label: string }[] = [
    { key: 'systems', label: 'Systems, Hardware & Algorithms' },
    { key: 'backend', label: 'Production Backend & Data Systems' }
]

export default async function FeaturedProjects() {
    const projects = await getFeaturedProjects()

    return (
        <section id='work' className='scroll-mt-28'>
            <div className='flex flex-wrap items-baseline justify-between gap-4'>
                <h2 className='title'>Selected Work</h2>
                <Link
                    href='/projects'
                    className='text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors'
                >
                    Full project archive
                    <ArrowRight className='h-4 w-4' />
                </Link>
            </div>

            {groups.map(group => {
                const items = projects.filter(
                    project => project.featuredGroup === group.key
                )

                if (items.length === 0) return null

                return (
                    <div key={group.key} className='mt-14 first:mt-12'>
                        <h3 className='eyebrow'>{group.label}</h3>
                        <ProjectList items={items} />
                    </div>
                )
            })}
        </section>
    )
}
