import './globals.css'
import { Barlow } from 'next/font/google'

const inter = Barlow({
  weight: ['400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Testimonials Examples',
  description: 'Project with testmonials example',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
