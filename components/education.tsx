import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { coreCoursework } from '@/lib/education'
import EducationHonors from '@/components/education-honors'
import EducationSummary from '@/components/education-summary'

export default function Education() {
    return (
        <section id='education' className='scroll-mt-28'>
            <div className='flex flex-wrap items-baseline justify-between gap-4'>
                <h2 className='title'>Education</h2>
                <Link
                    href='/education'
                    className='text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors'
                >
                    Full transcript
                    <ArrowRight className='h-4 w-4' />
                </Link>
            </div>

            <div className='mt-10'>
                <EducationSummary />
            </div>

            <div className='mt-12'>
                <p className='eyebrow'>Core Systems Coursework</p>
                <ul className='divide-border border-border mt-4 divide-y border-t'>
                    {coreCoursework.map(course => (
                        <li
                            key={course.title}
                            className='flex items-baseline justify-between gap-4 py-2.5 text-[15px]'
                        >
                            <span>{course.title}</span>
                            <span className='meta shrink-0'>
                                {course.grade}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <EducationHonors />
        </section>
    )
}
