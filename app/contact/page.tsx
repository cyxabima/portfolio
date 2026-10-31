import type { Metadata } from 'next'
import Link from 'next/link'

import ContactForm from '@/components/contact-form'
import { contactBlurb, profile } from '@/lib/portfolio'

export const metadata: Metadata = {
    title: 'Contact — Ukasha Anwer Ali',
    description:
        'Contact Ukasha Anwer Ali for research collaborations, systems engineering internships, and backend infrastructure work.'
}

export default function Contact() {
    return (
        <section className='pt-32 pb-28 md:pt-36'>
            <div className='container max-w-3xl'>
                <h1 className='title'>Contact</h1>
                <p className='body-copy mt-5 max-w-2xl'>{contactBlurb}</p>

                <div className='mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm'>
                    <a
                        href={`mailto:${profile.email}`}
                        className='text-muted-foreground hover:text-foreground underline decoration-1 underline-offset-2 transition-colors'
                    >
                        {profile.email}
                    </a>
                    <Link
                        href={profile.github}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='text-muted-foreground hover:text-foreground underline decoration-1 underline-offset-2 transition-colors'
                    >
                        github.com/cyxabima
                    </Link>
                    {/* <Link */}
                    {/*     href={profile.linkedin} */}
                    {/*     target='_blank' */}
                    {/*     rel='noreferrer noopener' */}
                    {/*     className='text-muted-foreground hover:text-foreground underline decoration-1 underline-offset-2 transition-colors' */}
                    {/* > */}
                    {/*     LinkedIn */}
                    {/* </Link> */}
                </div>

                <ContactForm />
            </div>
        </section>
    )
}
