import MDXContent from '@/components/mdx-content';
import NewsletterForm from '@/components/newletter-form';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'


export async function generateStaticParams() {
    const posts = await getPosts()
    const slugs = posts.map(post => ({ slug: post.slug }))

    return slugs
}

// SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug)
    if (!post) notFound();
    return {
        title: post.metadata.title,
        description: post.metadata.summary,
        keywords: post.metadata.keywords, // 👈 here it is used
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.summary,
            type: 'article',
            url: `https://ukashaanwer.tech/posts/${slug}`,
            images: [
                {
                    url: post.metadata.image,
                    alt: post.metadata.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.metadata.title,
            description: post.metadata.summary,
            images: [post.metadata.image],
        },
    };

}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug)
    if (!post) notFound();

    const { metadata, content } = post
    const { title, author, image, publishedAt } = metadata
    return (
        <section className='pb-24 pt-32'>
            <div className='container max-w-3xl'>
                <Link
                    href='/posts'
                    className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
                >
                    <ArrowLeftIcon className='h-5 w-5' />
                    <span>Back to posts</span>
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

                <main className='prose  mt-16 dark:prose-invert'>
                    <MDXContent source={content} />
                </main>

                <footer className='mt-16'>
                    <NewsletterForm />
                </footer>
            </div>
        </section>
    )

}
