import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDir = path.join(process.cwd(), 'content', 'projects')

export type Project = {
    metadata: ProjectMetadata
    content: string
}

export type ProjectLink = {
    label: string
    href: string
}

export type FeaturedGroup = 'systems' | 'backend'

export type ProjectMetadata = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug: string
    keywords?: string[]
    category?: string
    stack?: string[]
    links?: ProjectLink[]
    featured?: boolean
    featuredGroup?: FeaturedGroup
    order?: number
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const filePath = path.join(rootDir, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
        const { data, content } = matter(fileContent)
        return { metadata: { ...data, slug }, content }
    } catch (error) {
        return null
    }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
    const files = fs.readdirSync(rootDir)

    const projects = files
        .map(file => getProjectMetadata(file))
        .sort((a, b) => {
            const aOrder = a.order ?? Number.MAX_SAFE_INTEGER
            const bOrder = b.order ?? Number.MAX_SAFE_INTEGER

            if (aOrder !== bOrder) {
                return aOrder - bOrder
            }

            return (
                new Date(b.publishedAt ?? 0).getTime() -
                new Date(a.publishedAt ?? 0).getTime()
            )
        })

    if (limit) {
        return projects.slice(0, limit)
    }

    return projects
}

export async function getFeaturedProjects(): Promise<ProjectMetadata[]> {
    const projects = await getProjects()

    return projects
        .filter(project => project.featured)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDir, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
}
