import Link from 'next/link'

export default function Navbar() {
  return (
    <main>
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
    </main>
  )
}