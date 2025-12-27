import { useContext, useState, useEffect } from 'react'
import { DarkModeProvider, DarkModeContext } from './context/DarkModeContext.jsx'
import { TabProvider, TabContext } from './context/TabContext.jsx'
import { RenderProvider, RenderContext } from './context/RenderContext.jsx'
import { MobileProvider, MobileContext } from './context/MobileContext.jsx'
import { ProjectTabProvider } from './context/ProjectTabContext.jsx'
import Navigation from './components/Navigation.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import Gallery from './components/Gallery.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatIsToCome from './components/WhatIsToCome.jsx'
import BgDecorations from './components/BgDecorations.jsx'
import Bgblur from './components/BGblur.jsx'

function AppContent() {
  const { darkMode } = useContext(DarkModeContext);
  const { TabMode } = useContext(TabContext);
  const { rendered } = useContext(RenderContext);
  const { mobileMode, setMobileMode } = useContext(MobileContext);

  useEffect(() => {
    setMobileMode(window.matchMedia("(max-width: 768px)").matches);
    const handler = (e) => setMobileMode(e.matches);
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  console.log("mobile " + mobileMode);


  return (
    <div className="absolute w-screen h-screen inset-0 bg-[url('/Orange-landscape.jpg')] bg-cover bg-center z-0">
      <div className={`absolute inset-0 bg-[url('/Green-landscape.jpg')] bg-cover bg-center z-0
      transition-opacity duration-1000 ease-in-out pointer-events-none 
      ${darkMode ? "opacity-100" : "opacity-0"}`}>
      </div>

      <div className="z-10 fixed inset-0 pointer-events-none"><Bgblur /></div>
      <div className="z-0 fixed inset-0 pointer-events-none"><BgDecorations /></div>

      <div className={`z-40 absolute inset-x-0 top-0 w-screen h-5
                      ${(TabMode === "Home" || TabMode ==="none") ? (mobileMode ? "moveHeaderUp" : "moveHeaderDown") : "moveHeaderUp"}`}>
        <div className="flex relative justify-center">
          <div className={`h-25 ${mobileMode ? "max-w-90" : "max-w-250"}`}>
            <Header />
            <Navigation /> 
          </div>
        </div>
      </div>
      <div className="flex justify-center z-30 isolate relative w-screen h-screen overflow-hidden">
        <div className="">
          <AboutMe />
          <Projects />
          <WhatIsToCome />
          <Gallery />
          <ContactMe />
        </div>
      </div>
        <Footer />
      
    </div>
  )
}

function App() {
  return (
    <MobileProvider>
      <DarkModeProvider>
        <TabProvider>
          <RenderProvider>
            <ProjectTabProvider>
              <AppContent />
            </ProjectTabProvider>
          </RenderProvider>
        </TabProvider>
      </DarkModeProvider>
    </MobileProvider>
  )
}

export default App
