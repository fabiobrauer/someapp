import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <body>

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


        <div className='heroSection'>
          <div className='blur'>
            <h1>Agroforst Norddeutschland</h1>
            <p>professionelle Agroforstberatung für Landwirte</p>
</div>
        </div>

      <main className="main">


                  <section className='section Sfour'>
                     <h2>Agroforstkulturen</h2>
                      <div className='imageGallery'>
                      <div className='center'><Image src="/A7404296.jpg" width="400" height="400" className='round'/><h3>Agroforst mit Tierhaltung</h3></div>
                      <div className='center'><Image src="/Baumstämme.jpg" width="400" height="400" className='round'/><h3>Wertholzerzeugung</h3></div>
                      <div className='center'><Image src="/bäume.jpg" width="400" height="400" className='round'/><h3>Energieholz</h3></div>
                      <div className='center'><Image src="/ErdeHumus.jpg" width="400" height="400" className='round'/><h3>Humusaufbau und Bodenstruktur</h3></div>
                      </div>
                  </section>
                 

                    

                <h2>Agroforstsysteme</h2><br></br> 
                <section className='section Sone'>                     
                      <div className='flex'>
                        <div>
                            <p>
                              Agroforstsysteme haben das Potential, die betriebswirtschaftliche und ökologische Bilanz landwirtschaftlicher Betriebe bedeutend und nachhaltig zu verbessern und dabei gleichzeitig die Unabhängigkeit und den persönlichen Gestaltungsspielraum der Landwirte zu stärken.
                            </p><br></br>
                            <p>
                              Sie weisen eine große Bandbreite möglicher Maßnahmen auf, und können sowohl sehr kurz- als auch sehr langfristige Auswirkungen auf ganz unterschiedliche Betriebsbereiche haben. Diese komplexen Synergieeffekte gilt es bei der Planung zu berücksichtigen.
                                Bei der Auswahl der für Ihren Betrieb passenden Maßnahmen bieten wir Ihnen individuelle und kompetente Beratung.
                            </p>  
                        </div>            
                            <Image src="/plantage2.jpg" width="800" height="400"></Image>
                      </div>
                </section>





                  <section className='section Stwo'>
                      <h2>Förderung von Agroforstmaßnahmen</h2>
                      <p>
                      Der Bundestag hat am Mittwoch, 13. Januar 2021, einen Antrag von CDU/CSU und SPD zur Förderung der Agroforstwirtschaft mit dem Titel „Produktivität, Resilienz und Biodiversität steigern - Agroforstwirtschaft fördern“ (19/24389) angenommen. <br></br>
                      </p>
                  </section>

                  
            <a rel="license" href="http://creativecommons.org/licenses/by/2.0/"><img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/2.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/2.0/">Creative Commons Attribution 2.0 Generic License</a>.

                  

      </main> 

      <footer className={styles.footer}>
            <div className='ContactInfoDiv'>
              <h3>Kontakt</h3>
              <p>Tel: 0176 76472630 <br></br>
                Mail: andrea.pflaum@agroforst-norddeutschland.de</p>
                <p>Agroforst Norddeutschland <br></br>
                  Bardal 21<br></br>
                  21227 - Bendestorf</p>
            </div>
      </footer>
    </body>
  )
}
