import { honors } from '@/lib/education'

export default function EducationHonors() {
    return (
        <div className='border-border mt-12 border-t pt-8'>
            <p className='eyebrow'>Honors & Leadership</p>
            <ul className='text-foreground/80 mt-4 space-y-3 text-[15px] leading-7'>
                {honors.map(honor => (
                    <li key={honor} className='flex gap-3'>
                        <span
                            aria-hidden='true'
                            className='text-muted-foreground'
                        >
                            —
                        </span>
                        <span>{honor}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
