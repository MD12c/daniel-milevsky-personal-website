import { useContext, useState, useEffect } from 'react'
import { DarkModeProvider, DarkModeContext } from './context/DarkModeContext.jsx'
import { TabProvider, TabContext } from './context/TabContext.jsx'
import { RenderProvider, RenderContext } from './context/RenderContext.jsx'
import Navigation from './components/Navigation.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatIsToCome from './components/WhatIsToCome.jsx'
import BgDecorations from './components/BgDecorations.jsx'

function AppContent() {
  const { darkMode } = useContext(DarkModeContext);
  const { TabMode } = useContext(TabContext);
  const { rendered } = useContext(RenderContext);

  return (
    <div className="absolute inset-0 bg-[url('/Orange-landscape.jpg')] bg-cover bg-center z-0">
      <div className={`absolute inset-0 bg-[url('/Green-landscape.jpg')] bg-cover bg-center z-0
      transition-opacity duration-1000 ease-in-out pointer-events-none 
      ${darkMode ? "opacity-100" : "opacity-0"}`}>
      </div>
        <BgDecorations className="absolute z-10 pointer-events-none" />
        <div className={`absolute inset-0 z-20 w-screen h-150 overflow-hidden
                        ${(TabMode === "Home" || TabMode ==="none") ? "moveHeaderDown" : "moveHeaderUp"}`}>
          <Header className="" />
          <Navigation className={``} />
        </div>
        <div className="w-screen h-screen overflow-hidden">
          <AboutMe className="absolute inset-0 z-10" />
        </div>
          <Projects />
          <WhatIsToCome />
          <ContactMe />
          <Footer />
      
    </div>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <TabProvider>
        <RenderProvider>
        <AppContent />
        </RenderProvider>
      </TabProvider>
    </DarkModeProvider>
  )
}

export default App
