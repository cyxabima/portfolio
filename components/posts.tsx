import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
    return (
        <ul className='flex flex-col gap-10'>
            {posts.map(post => (
                <li key={post.slug}>
                    <Link
                        href={`/posts/${post.slug}`}
                        className='flex flex-col justify-between gap-x-6 gap-y-1 sm:flex-row'
                    >
                        <div className='max-w-lg'>
                            <p className='text-lg font-medium'>{post.title}</p>
                            <p className='text-foreground/70 mt-1.5 line-clamp-2 text-[15px] leading-6'>
                                {post.summary}
                            </p>
                        </div>

                        {post.publishedAt && (
                            <p className='meta mt-1'>
                                {formatDate(post.publishedAt)}
                            </p>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
