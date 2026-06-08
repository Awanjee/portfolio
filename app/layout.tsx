import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Usama Awan',
  description:
    'Full-stack engineer building production AI features with .NET, Flutter, and LangChain.',
  openGraph: {
    title: 'Usama Awan',
    description:
      'Full-stack engineer building production AI features with .NET, Flutter, and LangChain.',
    url: 'https://awanjee.dev',
    siteName: 'Usama Awan',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#e2e8f0]">
        {children}
      </body>
    </html>
  )
}
