import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Customer Insights',
  description: 'Customer Insights'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased', // Corrigido bg-backgrund para bg-background
          inter.className
        )}
      >
        <div className='flex'>
          <Sidebar />
          <main className='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  )
}
