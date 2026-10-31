import type { ProjectMetadata } from '@/lib/projects'
import ProjectList from '@/components/project-list'

type GroupKey = 'systems' | 'backend' | 'earlier'

const groups: { key: GroupKey; label: string }[] = [
    { key: 'systems', label: 'Systems, Hardware & Algorithms' },
    { key: 'backend', label: 'Production Backend & Data Systems' },
    { key: 'earlier', label: 'Earlier Work' }
]

function groupOf(project: ProjectMetadata): GroupKey {
    if (project.featuredGroup === 'systems') return 'systems'
    if (project.featuredGroup === 'backend') return 'backend'
    return 'earlier'
}

export default function Projects({
    projects
}: {
    projects: ProjectMetadata[]
}) {
    return (
        <div className='space-y-14'>
            {groups.map(group => {
                const items = projects.filter(
                    project => groupOf(project) === group.key
                )

                if (items.length === 0) return null

                return (
                    <section key={group.key}>
                        <h2 className='eyebrow'>{group.label}</h2>
                        <ProjectList items={items} headingLevel='h3' />
                    </section>
                )
            })}
        </div>
    )
}
