import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Header() {
    return (
        <header className='bg-background/75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm'>
            <nav className='container flex max-w-3xl items-center justify-between'>
                <div>
                    <Link href='/' className='font-serif text-2xl font-bold'>
                        UK
                    </Link>
                </div>

                <ul className='text-muted-foreground flex items-center gap-6 text-[13px] sm:gap-8'>
                    <li className='hover:text-foreground transition-colors'>
                        <Link href='/#about'>About</Link>
                    </li>
                    <li className='hover:text-foreground transition-colors'>
                        <Link href='/#work'>Work</Link>
                    </li>
                    <li className='hover:text-foreground transition-colors'>
                        <Link href='/education'>Education</Link>
                    </li>
                    <li className='hover:text-foreground transition-colors'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                <div>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
