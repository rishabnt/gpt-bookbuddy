import './globals.css'
require('dotenv').config()
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Chat from './components/Chat'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookbuddy',
  description: 'Your bookstore for Fantasy and Mystery novels!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>      
    </html>
  )
}
