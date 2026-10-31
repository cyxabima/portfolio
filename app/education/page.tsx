import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import EducationHonors from '@/components/education-honors'
import EducationSummary from '@/components/education-summary'
import SemesterRecord from '@/components/semester-record'

export const metadata: Metadata = {
    title: 'Education — Ukasha Anwer Ali',
    description:
        'Academic record for Ukasha Anwer Ali: Bachelor of Computer Systems Engineering at NED University of Engineering & Technology, 3.941/4.00 CGPA, with completed and in-progress semester coursework.'
}

export default function EducationPage() {
    return (
        <section className='pt-32 pb-28 md:pt-36'>
            <div className='container max-w-3xl'>
                <Link
                    href='/'
                    className='text-muted-foreground hover:text-foreground mb-10 inline-flex items-center gap-2 text-sm transition-colors'
                >
                    <ArrowLeft className='h-4 w-4' />
                    <span>Back to home</span>
                </Link>

                <h1 className='title'>Education</h1>
                <p className='body-copy mt-5 max-w-2xl'>
                    Undergraduate record at NED University of Engineering &
                    Technology, transcribed from the official transcript. The
                    full course history appears below.
                </p>

                <div className='mt-12'>
                    <EducationSummary />
                </div>

                <SemesterRecord />

                <EducationHonors />
            </div>
        </section>
    )
}
