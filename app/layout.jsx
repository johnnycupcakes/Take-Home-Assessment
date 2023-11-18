import './globals.css'
import { Lora } from 'next/font/google'
import Link from 'next/link'

const lora = Lora({ subsets: ['latin'] })

export const metadata = {
  title: 'Take Home Assessment',
  description: 'Vercel Senior Customer Success Engineer, West Take Home Assessment by Nicholas Boutte',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
      <nav>
        <h1>Take Home Assessment</h1>
        <Link href="/">Home </Link>
        <Link href="/1">Question 1</Link>
        <Link href="/2">Question 2</Link>
        <Link href="/3">Question 3</Link>
        <Link href="/4">Question 4</Link>
        <Link href="/5">Question 5</Link>
        <h2>What response would you write back?</h2>
        <Link href="/wrwywb/1">Question 1</Link>
        <Link href="/wrwywb/2">Question 2</Link>
      </nav>
      {children}</body>
    </html>
  )
}
