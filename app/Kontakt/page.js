import React from 'react'
import Link from 'next/link'


export default function page() {
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


    



    <section className='section Sfive'>
                      <h2>Wir unterstützen Sie gerne bei hrem Agroforstsystem</h2>
                      <p>Wir sind ein kleines, professionelles Team aus Umweltwissenschaft, Forst- und Landwirtschaft und unterstützen Sie gern beim Aufbau langfristig erfolgreicher Agroforstsysteme!
                      <br></br><br></br>Wir arbeiten mit modernen Geo-Informations-Systemen und Keyline® - Design und sind vernetzt mit vielen Experten und Praktikern im Bereich Agroforst.<br></br><br></br>
                      Kontaktieren Sie uns gerne und vereinbaren einen Termin für ein unverbindliches Beratungsgespräch.<br></br>
                      <br></br>Telefon: 0176 76472630
                      <br></br>E-Mail: andrea.pflaum@agroforst-norddeutschland.de
                      <br></br><br></br>Auf der folgenden Website finden Sie weitere Informationen und Preise:
                      </p>
                      <button><Link href={"#"}>Zur Webseite</Link></button>
                      {/* link zur webseite von mutti
                       */}
                      
    </section>
    
    </>
  )
}
