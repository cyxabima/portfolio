import { currentFocus } from '@/lib/portfolio'

export default function CurrentFocus() {
    return (
        <section className='mt-16'>
            <div className='border-border flex flex-wrap items-baseline justify-between gap-3 border-t pt-6'>
                <h3 className='font-serif text-xl font-semibold'>
                    Current Explorations
                </h3>
                <span className='eyebrow'>Active Lab · Fall 2026</span>
            </div>

            <ul className='divide-border mt-2 divide-y'>
                {currentFocus.map(item => (
                    <li key={item.title} className='py-6'>
                        <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
                            <h4 className='text-lg font-medium'>
                                {item.title}
                            </h4>
                            <span className='meta'>{item.stack}</span>
                        </div>
                        <p className='text-foreground/70 mt-2 max-w-2xl text-[15px] leading-7'>
                            {item.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
