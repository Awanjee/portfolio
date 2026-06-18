import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
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
    <html lang="en" className={`dark ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-canvas text-ink-1">
        {children}
      </body>
    </html>
  )
}
