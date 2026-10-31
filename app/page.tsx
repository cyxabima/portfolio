import About from '@/components/about'
import ContactCta from '@/components/contact-cta'
import Education from '@/components/education'
import FeaturedProjects from '@/components/featured-projects'
import Intro from '@/components/intro'
import NewsletterForm from '@/components/newletter-form'
import Skills from '@/components/skills'
import React from 'react'

export default function Page() {
    return (
        <section className='py-28 md:py-32'>
            <div className='container max-w-3xl space-y-24 md:space-y-32'>
                <Intro />
                <About />
                <Skills />
                <FeaturedProjects />
                <Education />
                <ContactCta />
                <NewsletterForm />
            </div>
        </section>
    )
}
