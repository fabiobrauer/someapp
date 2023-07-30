import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Components/header'
import Footer from './Components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agroforst-Norddeutschland',
  description: 'Made By Fabio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header></Header>
      <body className={inter.className}>{children}</body>
      <Footer></Footer>
    </html>
  )
}
