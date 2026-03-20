import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: {
    default: 'Krupa Nilaya School | Sandur, Ballari District',
    template: '%s | Krupa Nilaya School'
  },
  description: 'Krupa Nilaya School — A premier co-educational institution in Sandur, Ballari District, Karnataka. Quality education from Class 1 to Class 10 since 1993.',
  keywords: ['Krupa Nilaya School', 'School in Sandur', 'Ballari School', 'Karnataka School', 'CBSE School'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://krupanilayaschool.edu.in',
    siteName: 'Krupa Nilaya School',
    title: 'Krupa Nilaya School | Shaping Young Minds',
    description: 'A premier co-educational institution in Sandur, Ballari District, Karnataka.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-right" toastOptions={{
          duration: 4000,
          style: { fontFamily: 'DM Sans, sans-serif' }
        }} />
      </body>
    </html>
  )
}
