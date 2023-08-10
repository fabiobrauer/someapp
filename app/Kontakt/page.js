import React from 'react'
import Link from 'next/link'
import '../Kontakt/page.modules.css'



export default function page() {
  return (
    <>


            {/* aktuelles mit Förderungsabschnitt */}
    <section className='section Sfive'>
                      <h2>Wir unterstützen Sie gerne bei ihrem Agroforstsystem</h2>
                      <p>
                        Wir sind ein kleines, professionelles Team aus Umweltwissenschaft, Forst- und Landwirtschaft und unterstützen Sie gern beim Aufbau langfristig erfolgreicher Agroforstsysteme!
                        <br></br><br></br>Wir arbeiten mit modernen Geo-Informations-Systemen und Keyline® - Design und sind vernetzt mit vielen Experten und Praktikern im Bereich Agroforst.<br></br><br></br>
                        Kontaktieren Sie uns gerne und vereinbaren einen Termin für ein unverbindliches Beratungsgespräch.<br></br>
                        <br></br>Telefon: 0176 76472630
                        <br></br>E-Mail: andrea.pflaum@agroforst-norddeutschland.de
                        <br></br><br></br>Auf der folgenden Website finden Sie weitere Informationen und Preise:
                      </p>
                      <button><Link href={"https://wald-boden-konzept.net/"}>Zur Webseite</Link></button>
                      
    </section>
    
    </>
  )
}
