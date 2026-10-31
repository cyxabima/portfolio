import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { contactBlurb, profile } from '@/lib/portfolio'

export default function ContactCta() {
    return (
        <section id='contact' className='scroll-mt-28'>
            <div className='border-border border-t pt-8'>
                <p className='eyebrow'>Contact</p>
                <h2 className='mt-3 font-serif text-2xl font-semibold md:text-3xl'>
                    Get in touch
                </h2>
                <p className='body-copy mt-3 max-w-2xl'>{contactBlurb}</p>

                <div className='mt-8 flex flex-wrap items-center gap-x-7 gap-y-3'>
                    <Button asChild size='lg'>
                        <a href={`mailto:${profile.email}`}>
                            <Mail className='h-4 w-4' />
                            {profile.email}
                        </a>
                    </Button>
                    <Button asChild variant='outline' size='lg'>
                        <Link href='/contact'>Contact form</Link>
                    </Button>
                    <a
                        href={profile.github}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors'
                    >
                        GitHub
                        <ArrowUpRight className='h-3.5 w-3.5' />
                    </a>
                    <a
                        href={profile.linkedin}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors'
                    >
                        LinkedIn
                        <ArrowUpRight className='h-3.5 w-3.5' />
                    </a>
                </div>
            </div>
        </section>
    )
}
