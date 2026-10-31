import type { Metadata } from 'next'
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

const sourceSerif = Source_Serif_4({
    variable: '--font-serif-source',
    subsets: ['latin'],
    display: 'swap'
})

// SEO
export const metadata: Metadata = {
    title: 'Ukasha Anwer Ali — Computer Systems Engineering & Backend Infrastructure',
    description:
        'Computer Systems Engineering undergraduate at NED UET (3.941 CGPA). Building low-level systems, computer architecture implementations, concurrent Go services, and production backend infrastructure.',
    keywords: [
        // Name variants
        'Ukasha',
        'Ukasha Anwer',
        'Ukasha Anwer Ali',
        'Ukasha Khokhar',
        'Ukasha Anwer Ali Khokhar',
        'cyxabima',
        'CYXABIMA',
        'Cyxabima',

        // Identity
        'Computer Systems Engineering',
        'Computer Systems Engineer',
        'NED University',
        'NEDUET',
        'CIS Department',
        'Karachi',

        // Systems & Architecture
        'Operating Systems',
        'Computer Architecture',
        'Digital Logic Design',
        'FSM Design',
        'RISC-V',
        'Embedded Systems',
        'Linux Kernel',
        'eBPF',
        'XDP',
        'Socket Programming',
        'TCP/IP',
        'Concurrent Systems',
        'Distributed Systems',
        'Parallel Systems',
        'Systems Security',

        // Languages & Backend
        'C',
        'C++',
        'Go',
        'Python',
        'TypeScript',
        'SQL',
        'Bash',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Nginx',
        'FastAPI',
        'Node.js',
        'Express',
        'REST APIs',
        'Drizzle ORM',
        'SQLModel',
        'SQLC',
        'Backend Infrastructure',
        'Database Systems'
    ],
    icons: {
        icon: '/favicon.ico', // default
        shortcut: '/favicon-32x32.png', // optional
        apple: '/apple-touch-icon.png' // for iOS
    },
    metadataBase: new URL('https://ukashaanwerali.dev'),
    authors: [{ name: 'Ukasha Anwer Ali', url: 'https://ukashaanwerali.dev' }],
    creator: 'Ukasha Anwer Ali',
    publisher: 'Ukasha Anwer Ali',
    openGraph: {
        title: 'Ukasha Anwer Ali — Computer Systems Engineering & Backend Infrastructure',
        description:
            'Computer Systems Engineering undergraduate at NED UET (3.941 CGPA). Building low-level systems, computer architecture implementations, concurrent Go services, and production backend infrastructure.',
        url: 'https://ukashaanwerali.dev',
        siteName: 'Ukasha Anwer Ali',
        images: [
            {
                url: 'https://ukashaanwerali.dev/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Ukasha Anwer Ali — Computer Systems Engineering & Backend Infrastructure'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ukasha Anwer Ali — Computer Systems Engineering & Backend Infrastructure',
        description:
            'Computer Systems Engineering undergraduate at NED UET (3.941 CGPA). Building low-level systems, computer architecture implementations, concurrent Go services, and production backend infrastructure.',
        creator: '@UkashAnwer', // Optional
        images: ['https://ukashaanwerali.dev/og-image.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1
        }
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`flex min-h-screen flex-col ${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}
            >
                <Providers>
                    <Header />
                    <main className='grow'>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
