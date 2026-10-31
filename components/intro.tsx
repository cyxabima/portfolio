import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

import authorImage from '@/public/images/authors/author.jpeg'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio'

export default function Intro() {
    return (
        <section className='flex flex-col-reverse items-start gap-x-14 gap-y-8 md:flex-row md:items-center'>
            <div className='flex-1'>
                <p className='eyebrow'>{profile.role}</p>
                <h1 className='title mt-4 text-4xl leading-[1.08] md:text-5xl'>
                    {profile.name}
                </h1>
                <p className='body-copy mt-6 max-w-xl'>{profile.tagline}</p>

                <div className='mt-8 flex flex-wrap items-center gap-3'>
                    <Button asChild size='lg'>
                        <Link
                            href={profile.github}
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            GitHub
                            <ArrowUpRight className='h-4 w-4' />
                        </Link>
                    </Button>
                    <Button asChild variant='outline' size='lg'>
                        <Link href='#work'>
                            Selected Work
                            <ArrowDown className='h-4 w-4' />
                        </Link>
                    </Button>
                </div>
            </div>

            <div className='relative shrink-0'>
                <Image
                    className='h-[180px] w-[180px] rounded-md object-cover grayscale'
                    src={authorImage}
                    alt={profile.name}
                    width={180}
                    height={180}
                    priority
                />
            </div>
        </section>
    )
}
