import { skillTiers } from '@/lib/portfolio'

export default function Skills() {
    return (
        <section id='skills' className='scroll-mt-28'>
            <h2 className='title'>Technical Skills</h2>

            <dl className='border-border mt-10 border-t'>
                {skillTiers.map(tier => (
                    <div
                        key={tier.label}
                        className='border-border grid gap-3 border-b py-6 sm:grid-cols-[12rem_1fr] sm:gap-8'
                    >
                        <dt className='eyebrow pt-0.5'>{tier.label}</dt>
                        <dd>
                            <ul className='text-foreground/80 flex flex-wrap gap-x-8 gap-y-2 text-[15px] leading-6'>
                                {tier.items.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    )
}
