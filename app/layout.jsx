import './globals.css'
import { Inter } from 'next/font/google'
import CursorEffect from '@/components/CursorEffect'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NehmanRahimi.Portfolio | Developer & Sales Professional',
  description: 'One mind, two masters: Code by day, closes by night. Explore the dual expertise of software development and sales.',
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

