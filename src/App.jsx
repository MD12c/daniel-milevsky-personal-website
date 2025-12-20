import { useContext, useState } from 'react'
import { DarkModeProvider, DarkModeContext } from './context/DarkModeContext'
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
  return (
    <div className="absolute inset-0 bg-[url('/Orange-landscape.jpg')] bg-cover bg-center z-0">
      <div className={`absolute inset-0 bg-[url('/Green-landscape.jpg')] bg-cover bg-center z-0
      transition-opacity duration-1000 ease-in-out pointer-events-none 
      ${darkMode ? "opacity-100" : "opacity-0"}`}>
      </div>
        <BgDecorations className="absolute z-10 pointer-events-none" />
        <div className="absolute inset-0 mt-[40vh] xl2:mx-40 z-20">
          <Header />
          <Navigation />
        </div>
          <AboutMe />
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
      <AppContent />
    </DarkModeProvider>
  )
}

export default App
