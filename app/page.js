
/** @jsxImportSource react */
"use client";

import Image from 'next/image'
import  '../app/page.module.css'
import React, { useState } from 'react';



export default function Home() {
  const [showWindow1, setShowWindow1] = useState(false);

  const handleButtonClick1 = () => {
    setShowWindow1(true);
  };

  const handleClose1 = () => {
    setShowWindow1(false);
  };

  const [showWindow2, setShowWindow2] = useState(false);

  const handleButtonClick2 = () => {
    setShowWindow2(true);
  };

  const handleClose2 = () => {
    setShowWindow2(false);
  };


  const [showWindow3, setShowWindow3] = useState(false);

  const handleButtonClick3 = () => {
    setShowWindow3(true);
  };

  const handleClose3 = () => {
    setShowWindow3(false);
  };
  const [showWindow4, setShowWindow4] = useState(false);

  const handleButtonClick4 = () => {
    setShowWindow4(true);
  };

  const handleClose4 = () => {
    setShowWindow4(false);
  };

  
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
                      <div className='center'>

                      <button onClick={handleButtonClick1}  className='modalbutton'>
                      <Image src="/A7404296.jpg" alt='Chickens' width="400" height="400" className='round'/><h3>Agroforst mit Tierhaltung</h3>
                      </button>
                        {showWindow1 && (
                          <div className= "modal">
                            <p>Es gibt viele traditionelle Agroforstsysteme mit Tieren. In diesen als silvopastoral bezeichneten Systemen werden Wälder oder Obstbaumwiesen als Weide für Tiere genutzt. Durch die Erträge aus mehreren Nutzungsarten wird der Ertrag pro Fläche erhöht, in dem z.B. Eier und Obst oder Fleisch und Holzhäcksel auf einer Fläche produziert werden. Neben der Ertragssteigerung entstehen auch relevante Synergieeffekte, z.B. können Hühner in einer Nussbaumplantage den Schädlingsbefall stark reduzieren.
                                Moderne, silvopastorale Agroforst-Systemen müssen an mechanisierte Arbeitsprozesse angepasst werden und die Bedürfnisse der Landwirte und die örtlichen Gegebenheiten berücksichtigen.</p>
                            <button onClick={handleClose1}>Schließen</button>
                          </div>
                        )}
                      </div>
                      <div className='center'>
                        <button onClick={handleButtonClick2}  className='modalbutton'>
                          <Image src="/Baumstämme.jpg" alt='Wood' width="400" height="400" className='round'/><h3>Wertholzerzeugung</h3>
                        </button>
                          {showWindow2 && (<div className= "modal"><p>Die Erzeugung von Wertholz bindet zunächst langfristig Kapital. Da Agroforstflächen aber immer mehrfach genutzt werden, muss das keinen nachteiligen Effekt auf den Betrieb haben, da die Fläche, auf der die Wertholzbäume wachsen, bis zur Holzernte andere Erträge wie z.B. Getreide oder Hackfrüchte einbringen.
                            Der Wertholzanbau selbst erfordert relativ wenig Arbeitsaufwand, hauptsächlich im Winter.
                            Einige schnellwachsende Baumarten können schon nach 12 Jahren als hochpreisiges Wertholz geerntet werden. Durch die Beschattung und die tiefe Durchwurzelung werden die Anbauflächen zwischen den Bäumen besser vor Austrocknung und Erosion geschützt, das Laub der Bäume trägt zum Humusaufbau der Flächen bei.
                            </p><button onClick={handleClose2}>Schließen</button></div>)}
                      </div>
                      <div className='center'>
                        <button onClick={handleButtonClick3}  className='modalbutton'>
                        <Image src="/bäume.jpg" alt='ForestAndWood' width="400" height="400" className='round'/><h3>Energieholz</h3>
                          </button>
                            {showWindow3 && (<div className= "modal"><p>Energieholz kann in Form von Kurzumtriebsplantagen sehr gut mit Ackerkulturen kombiniert werden.
                              Besonders erosionsgefähdete, sandige Böden profitieren von den Synergieeffekten mit schnellwachsenden
                              Energieholzbäumen wie Weiden und Pappeln.
                              </p><button onClick={handleClose3}>Schließen</button></div>)}
                      </div>
                      <div className='center'>
                        <button onClick={handleButtonClick4} className='modalbutton'>
                        <Image src="/ErdeHumus.jpg" alt='Soil' width="400" height="400" className='round'/><h3>Humusaufbau und Bodenstruktur</h3>
                          </button>{showWindow4 && (<div className= "modal"><p>In Agroforstsystemen treten zahlreiche Synergieeffekte auf. Die Wurzeln der Gehölze pumpen Wasser und Nährstoffe aus tieferen Bodenschichten und schützen den Boden vor Winderosion und Vernässung. Durch das abfallende Laub wird Humus aufgebaut und das Bodenleben gefördert. Bei starker Sonneneinstrahlung schützen die Bäume den Boden vor Austrocknung.
                            </p><button onClick={handleClose4}>Schließen</button></div>)}
                      </div>
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
