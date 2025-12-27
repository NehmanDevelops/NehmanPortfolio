import './globals.css'
import { Inter } from 'next/font/google'
import CursorEffect from '@/components/CursorEffect'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nehman Rahimi | Developer & Sales Professional',
  description: 'One mind, two masters: Code by day, closes by night. Explore the dual expertise of software development and sales. Full-stack developer and sales professional showcasing innovative projects and achievements.',
  keywords: ['Nehman Rahimi', 'Software Developer', 'Full Stack Developer', 'Sales Professional', 'Portfolio', 'York University', 'Computer Science', 'React', 'Next.js', 'Web Development'],
  authors: [{ name: 'Nehman Rahimi' }],
  openGraph: {
    title: 'Nehman Rahimi | Developer & Sales Professional',
    description: 'One mind, two masters: Code by day, closes by night. Full-stack developer and sales professional.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nehman Rahimi | Developer & Sales Professional',
    description: 'One mind, two masters: Code by day, closes by night.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CursorEffect />
        {children}
      </body>
    </html>
  )
}

