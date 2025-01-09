import { Inter } from 'next/font/google'
import { Background } from '@/components/background'
import { CustomCursor } from '@/components/cursor'
import { Navigation } from '@/components/nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sri Krishna Chaitanya - Portfolio',
  description: 'AI and ML enthusiast dedicated to leveraging technology for impactful solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Background />
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

