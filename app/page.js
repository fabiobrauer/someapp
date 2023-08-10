import Image from 'next/image'
import  '../app/page.module.css'



export default function Home() {
  return (
    <body>
            {/* aktuelles mit Förderungsabschnitt */}
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
                      <div className='center'><Image src="/A7404296.jpg" alt='Chickens' width="400" height="400" className='round'/><h3>Agroforst mit Tierhaltung</h3></div>
                      <div className='center'><Image src="/Baumstämme.jpg" alt='Wood' width="400" height="400" className='round'/><h3>Wertholzerzeugung</h3></div>
                      <div className='center'><Image src="/bäume.jpg" alt='ForestAndWood' width="400" height="400" className='round'/><h3>Energieholz</h3></div>
                      <div className='center'><Image src="/ErdeHumus.jpg" alt='Soil' width="400" height="400" className='round'/><h3>Humusaufbau und Bodenstruktur</h3></div>
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
                            <Image src="/plantage2.jpg" alt='TreePlantation' width="800" height="400"></Image>
                      </div>
                </section>
                <section className='section Stwo'>
                      <h2>Förderung von Agroforstmaßnahmen</h2>
                      <p>
                        Der Bundestag hat am Mittwoch, 13. Januar 2021, einen Antrag von CDU/CSU und SPD zur Förderung der Agroforstwirtschaft mit dem Titel „Produktivität, Resilienz und Biodiversität steigern - Agroforstwirtschaft fördern“ (19/24389) angenommen. <br></br>
                      </p>
                  </section>
            <div className='licence'>
              <a rel="license" href="http://creativecommons.org/licenses/by/2.0/" >
                <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/2.0/88x31.png" />
              </a>
              <br />This work is licensed under a 
                <a rel="license" href="http://creativecommons.org/licenses/by/2.0/">
                  Creative Commons Attribution 2.0 Generic License
                </a>
            </div>
      </main> 
    </body>
  )
}
