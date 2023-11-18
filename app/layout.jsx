import './globals.css'
import { Lora } from 'next/font/google'

// components
import Navbar from './components/Navbar'

const lora = Lora({ subsets: ['latin'] })

export const metadata = {
  title: 'Take Home Assessment',
  description: 'Vercel Senior Customer Success Engineer, West Take Home Assessment by Nicholas Boutte',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
      <Navbar />
      {children}</body>
    </html>
  )
}
