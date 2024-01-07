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
        <meta name="title" content="Agroforstprojekt-Unterstützung: Planung, Umsetzung und Vermarktung"/>
        <meta name="description" content="Professionelle Unterstützung für Agroforstprojekte von der Planung bis zur Vermarktung. Individuelle Beratung für Standortwahl, Pflanzung, Baumpflege, Ernte und rechtliche Aspekte. Entdecken Sie maßgeschneiderte Lösungen für Ihren landwirtschaftlichen Betrieb."/>
        <meta name="keywords" content="Agroforstsysteme, Agroforstprojekte, Agroforstplanung, Agroforstumsetzung, Agroforstpflege, Agroforstvermarktung, Baumschnitt, Ernte, Agroforstrecht, Naturschutz, Wasserrecht, Agrarrecht"/>
        <meta name="author" content="Ihr Unternehmen oder Name"/>
        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="https://www.ihre-webseite.de"></link>
        
        <meta name="google-site-verification" content="yZ5WrG4kYxlz5scnE2vOrESjdRVRttIL9420ZOMUAFA" />
      </head>
      <Header></Header>
      <body className={inter.className}>{children}</body>
      <Footer></Footer>
    </html>
  )
}
