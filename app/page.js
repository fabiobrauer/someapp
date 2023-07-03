import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <body>

            <header className='header'>
                    <nav>
                      <ul>
                        <li><a>Home</a></li>
                        <li><a>Contact</a></li>
                      </ul>
                    </nav>
            </header>


        <div className='heroSection'>
          <h1>Agroforst Norddeutschland</h1>
          <p>professionelle Agroforstberatung für Landwirte</p>
        </div>

      <main className="main">

                  <section className='section Sone'>
                    <h2>Agroforstsysteme</h2><br></br>
                    <p>
                      Agroforstsysteme haben das Potential, die betriebswirtschaftliche und ökologische Bilanz landwirtschaftlicher Betriebe bedeutend und nachhaltig zu verbessern und dabei gleichzeitig die Unabhängigkeit und den persönlichen Gestaltungsspielraum der Landwirte zu stärken.
                    </p><br></br>
                    <p>
                      Sie weisen eine große Bandbreite möglicher Maßnahmen auf, und können sowohl sehr kurz- als auch sehr langfristige Auswirkungen auf ganz unterschiedliche Betriebsbereiche haben. Diese komplexen Synergieeffekte gilt es bei der Planung zu berücksichtigen.
                        Bei der Auswahl der für Ihren Betrieb passenden Maßnahmen bieten wir Ihnen individuelle und kompetente Beratung.
                    </p><br></br>
                    <p>
                      Unser Service umfasst die Bereiche Auswahl standortgerechter Maßnahmen, Planung, praktische Umsetzung, Förderung, rechtliche Rahmenbedingungen, Vermarktung und Weiterentwicklung. Bei der Planung sollte man berücksichtigen, dass Agroforstsysteme langfristig gedacht werden müssen. Sie wachsen und entwickeln sich mit dem Betrieb. Einige Investitionen werden sich erst in Jahrzehnten bezahlt machen, einige Synergieeffekte können die Erträge jahrzehntelang verbessern.
                        Wir begleiten Sie auf Wunsch bei der Weiterentwicklung ihrer Systeme und beraten Sie bei Anpassungsmaßnahmen.
                    </p>
                    
                  </section>

                  <section className='section Stwo'>
                      <h2>Förderung von Agroforstmaßnahmen</h2>
                      <p>
                      Der Bundestag hat am Mittwoch, 13. Januar 2021, einen Antrag von CDU/CSU und SPD zur Förderung der Agroforstwirtschaft mit dem Titel „Produktivität, Resilienz und Biodiversität steigern - Agroforstwirtschaft fördern“ (19/24389) angenommen. Link zur Website des Bundestags.
                      </p>
                  </section>

                  <section className='section Sthree'>
                        <h2>Leistungen</h2>
                        <p>Wir unterstützen Sie über den gesamten Zeitraum eines Projektes bei:</p>

                      <ul>
                        <li>Planung</li>
                        <li>Umsetzung</li>
                        <li>Pflege</li>
                        <li>Förderung</li>
                        <li>Weiterentwicklung</li>
                        <li>Vermarktung</li>
                      </ul>
                      <p>
                      Erster Schritt ist die Auswahl geeigneter Agroforstkulturen sowie wie die Anordnung der Agroforstelemente auf der Betriebsfläche. Entscheidend sind hierbei die persönlich gewünschten Arbeitsbedingungen ,das vorhandene Landschaftsrelief, die Bodeneigenschaften und der Wasserhaushalt.
                      Bei der Praktischen Umsetzung geht es um die Organisation der durch die Implementierung von Agroforstsystemen entstehenden Arbeiten wie Pflanzung, Baumschnitt, Ernte, Aufastung sowie Kombinationssysteme mit Tierhaltung.
                      Schließlich sind bei der Vermarktung und der Erschließung neuer Vertriebswege Kreativität und Vernetzung gefragt.
                      Die Möglichkeiten der Förderung und Direktzahlungen sind zur Zeit leider unübersichtlich und je nach Bundesland verschieden, ebenso die rechtlichen Rahmenbedingungen
                      Wichtig sind hier Agrarrecht, Naturschutz- und Wasserrecht zu beachten.
                      Auch pachtrechtliche Fragen müssen möglicherweise geklärt werden.</p>
                  </section>



                  <section className='section Sfour'>
                     <h2>Agroforstkulturen</h2>
                      <div className='imageGallery'>
                        <Image src="/Example.png" width="400" height="400" className='round'/>
                        <Image src="/Example.png" width="400" height="400" className='round'/>
                        <Image src="/Example.png" width="400" height="400" className='round'/>
                        <Image src="/Example.png" width="400" height="400" className='round'/>
                        <Image src="/Example.png" width="400" height="400" className='round'/>
                        <Image src="/Example.png" width="400" height="400" className='round'/>
                      </div>
                  </section>




                  <section className='section Sfive'>
                      <h2>Wir unterstützen Sie gerne bei hrem Agroforstsystem</h2>
                      <p>Wir sind ein kleines, professionelles Team aus Umweltwissenschaft, Forst- und Landwirtschaft und unterstützen Sie gern beim Aufbau langfristig erfolgreicher Agroforstsysteme!
                      Wir arbeiten mit modernen Geo-Informations-Systemen und Keyline® - Design und sind vernetzt mit vielen Experten und Praktikern im Bereich Agroforst.
                      Kontaktieren Sie uns gerne und vereinbaren einen Termin für ein unverbindliches Beratungsgespräch.
                      Telefon: 0176 76472630
                      E-Mail: andrea.pflaum@agroforst-norddeutschland.de
                      Auf der folgenden Website finden Sie weitere Informationen und Preise:
                      </p>
                      <button>Weitere Informationen</button>
                  </section>

      </main> 

      <footer>
        <nav>
              <ul>
                <li><a>Home</a></li>
                <li><a>Contact</a></li>
              </ul>
            </nav>
            <div className='ContactInfoDiv'>
              <h3>Kontakt</h3>
              <p>Tel: 0176 76472630
                Mail: andrea.pflaum@agroforst-norddeutschland.de</p>
                <p>Agroforst Norddeutschland
                  Bardal 21
                  21227 - Bendestorf</p>
            </div>
      </footer>
    </body>
  )
}
