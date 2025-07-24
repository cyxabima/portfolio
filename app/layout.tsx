import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO
export const metadata: Metadata = {
  title: "Ukasha Anwer — Computer Systems & Software Engineering Student @ NED",
  description:
    "I'm Ukasha Anwer, a Computer Systems & Software Engineering student from the Department of CIS at NED University. I build modern software projects using tools like Next.js, React, and FastAPI. I'm also comfortable working with technologies like Python, JavaScript, TypeScript, and full stack architectures like the MERN stack.",
  keywords: [
    // Name variants
    "Ukasha",
    "Ukasha Anwer",
    "Ukasha Anwer Ali",
    "Ukasha Khokhar",
    "Ukasha Anwer Ali Khokhar",
    "cyxabima",
    "CYXABIMA",
    "Cyxabima",

    // Identity
    "Computer Systems Engineering",
    "Software Engineering",
    "CIS Department",
    "NED University",
    "NEDUET",
    "CIS NED",

    // Programming Languages & Tech
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "FastAPI",
    "REST APIs",
    "Full Stack Projects",
    "Modern Web Development",

    // Role/Context
    "Engineering Student Portfolio",
    "Web Development",
    "Software Projects",
    "Tech Enthusiast",
    "Student Developer",
    "Independent Developer",
    "portfolio design"
  ],
  icons: {
    icon: "/favicon.ico", // default
    shortcut: "/favicon-32x32.png", // optional
    apple: "/apple-touch-icon.png", // for iOS
  },
  metadataBase: new URL("https://ukashaanwer.tech"),
  authors: [{ name: "Ukasha Anwer", url: "https://ukashaanwer.tech" }],
  creator: "Ukasha Anwer",
  publisher: "Ukasha Anwer",
  openGraph: {
    title: "Ukasha Anwer — CSE Student @ NED | Portfolio",
    description:
      "Portfolio of Ukasha Anwer, a Computer Systems & Software Engineering student at NED University (Department of CIS), building full stack software projects with React, Next.js, and FastAPI.",
    url: "https://ukashaanwer.tech",
    siteName: "Ukasha Anwer Portfolio",
    images: [
      {
        url: "https://ukashaanwer.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ukasha Anwer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ukasha Anwer — Systems & Software Student @ NED",
    description:
      "Explore the portfolio of Ukasha Anwer, a Computer Systems & Software Engineering student at NED University's CIS Department, passionate about building software with modern technologies like Python, React, and FastAPI.",
    creator: "@UkashAnwer", // Optional
    images: ["https://ukashaanwer.tech/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex min-h-screen flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className='grow'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
