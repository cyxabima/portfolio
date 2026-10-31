import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
    const posts = await getPosts(4)

    return (
        <section>
            <h2 className='title'>Recent posts</h2>
            <div className='mt-10'>
                <Posts posts={posts} />

                <Link
                    href='/posts'
                    className='text-muted-foreground hover:text-foreground mt-10 inline-flex items-center gap-2 text-sm transition-colors'
                >
                    <span>All posts</span>
                </Link>
            </div>
        </section>
    )
}
