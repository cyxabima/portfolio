import path from "path";
import fs from 'fs';
import matter from "gray-matter";

export type Post = {
    metadata: PostMetadata,
    content: string
}

export type PostMetadata = {
    title?: string,
    summary?: string,
    image?: string,
    author?: string,
    publishedAt?: string,
    slug: string
    keywords?: string[]
}


const rootDir = path.join(process.cwd(), 'content', 'posts')


export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {

        const filePath = path.join(rootDir, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" })
        const { data, content } = matter(fileContent)

        return {
            metadata: { ...data, slug },
            content
        }
    } catch (error) {
        return null
    }
}



export async function getPosts(limit?: number): Promise<PostMetadata[]> {
    const files = fs.readdirSync(rootDir)

    const posts = files
        .map(file => getPostmetadata(file))
        .sort((a, b) => {
            if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
                return 1
            } else {
                return -1
            }
        })

    if (limit) {
        return posts.slice(0, limit)
    }

    return posts
}

export function getPostmetadata(filepath: string): PostMetadata {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDir, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
}
