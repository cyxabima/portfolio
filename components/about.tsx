import { aboutParagraphs } from '@/lib/portfolio'
import CurrentFocus from '@/components/current-focus'

export default function About() {
    return (
        <section id='about' className='scroll-mt-28'>
            <h2 className='title'>About</h2>

            <div className='body-copy mt-8 space-y-5'>
                {aboutParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <CurrentFocus />
        </section>
    )
}
