import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
  <>     
    <header className="header">
        <nav>
            <ul>
                <li><Link href={"/"} className='link'>Home</Link></li>
                <li><Link href={"Kontakt"} className='link'>Kontakt</Link></li>
                <li><Link href={"Leistung"} className='link'>Leistung</Link></li>
                {/* aktuelles mit Förderungsabschnitt */}
            </ul>
        </nav>
    </header>
  </>

  )
}
