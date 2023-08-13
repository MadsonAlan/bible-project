import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen items-center justify-center">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
