import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Mohamed Zakaria — Full-Stack & Mobile Engineer',
  description: 'Portfolio of Mohamed Zakaria Saleh Hodaib, Software Engineer building full-stack TypeScript websites and React Native applications. Explore client work, offline-first apps, and engineering projects.',
  generator: 'next',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
