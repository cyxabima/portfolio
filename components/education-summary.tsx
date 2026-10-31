import { completedCredits, educationProfile } from '@/lib/education'

export default function EducationSummary() {
    return (
        <div className='border-border grid gap-10 border-t pt-8 sm:grid-cols-[1.4fr_1fr] sm:gap-12'>
            <div>
                <p className='eyebrow'>Degree</p>
                <h3 className='mt-3 font-serif text-xl font-semibold'>
                    {educationProfile.degree}
                </h3>
                <p className='text-foreground/70 mt-2 text-[15px] leading-6'>
                    {educationProfile.institution}
                </p>
                <p className='text-foreground/70 text-[15px] leading-6'>
                    {educationProfile.location}
                </p>
                <p className='text-foreground/70 text-[15px] leading-6'>
                    {educationProfile.duration}
                </p>
                <p className='text-foreground/70 mt-3 text-[15px] leading-6'>
                    {educationProfile.standing}
                </p>
            </div>

            <dl className='space-y-6'>
                <div>
                    <dt className='eyebrow'>CGPA</dt>
                    <dd className='mt-2 font-serif text-4xl font-semibold'>
                        {educationProfile.cgpa}
                        <span className='text-muted-foreground ml-1.5 text-xl font-normal'>
                            / {educationProfile.cgpaScale}
                        </span>
                    </dd>
                </div>

                <div>
                    <dt className='eyebrow'>Completed Credit Hours</dt>
                    <dd className='mt-1 text-[15px]'>{completedCredits}</dd>
                </div>

                <div>
                    <dt className='eyebrow'>Transcript Verified</dt>
                    <dd className='meta mt-1'>
                        {educationProfile.transcriptVerified}
                    </dd>
                </div>
            </dl>
        </div>
    )
}
