import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <section className='pt-32 pb-28 md:pt-36'>
            <div className='container max-w-3xl'>
                <h1 className='title'>Project Archive</h1>
                <p className='body-copy mt-5 max-w-2xl'>
                    Case studies across systems, hardware, and production
                    backend work. Ongoing experiments are documented on the home
                    page under Current Explorations.
                </p>

                <div className='mt-14'>
                    <Projects projects={projects} />
                </div>
            </div>
        </section>
    )
}
