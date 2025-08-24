import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emre ULUSOY',
  description: 'Created with L O V E by Emre ULUSOY',
  generator: 'Emre ULUSOY',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
