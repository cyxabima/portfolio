import path from "path";
import fs from 'fs';
import matter from "gray-matter";

export type Post = {
    metadata: PostMetaData,
    content: string
}

export type PostMetaData = {
    title?: string,
    summary?: string,
    image?: string,
    author?: string,
    publishedAt?: string,
    slug: string
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
