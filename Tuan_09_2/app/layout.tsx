import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bài tập tuần 9',
  description: 'Bài tập tuần 9',
  generator: 'Nguyễn Hữu Sang',
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
