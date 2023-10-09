import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Components/header'
import Footer from './Components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agroforst-Norddeutschland',
  description: 'Agroforst Norddeutschland',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name='description' content='Permakultur + Garten'/>
        <meta name='description' content='Andrea Pflaum Agroforst'/>
        <meta name="google-site-verification" content="yZ5WrG4kYxlz5scnE2vOrESjdRVRttIL9420ZOMUAFA" />
      </head>
      <Header></Header>
      <body className={inter.className}>{children}</body>
      <Footer></Footer>
    </html>
  )
}
