import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { Toaster } from '@/components/ui/sonner'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
 RedirectToSignIn,
} from '@clerk/nextjs';
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'Utopia Express Researcher'
const description =
  'AI-powered research engine'

export const metadata: Metadata = {
  metadataBase: new URL('https://search.utopia.express'),
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@utopia'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased bg-gradient-to-r from-sky-50 to-rose-50 dark:bg-gradient-to-r dark:from-stone-800 dark:to-neutral-800 dark:text-stone-300', fontSans.variable)}>
      <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          

          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
          
          <Header />
          {children}
          <Sidebar />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </ClerkProvider>
      <Analytics/>
      </body>
    </html>
  )
}
