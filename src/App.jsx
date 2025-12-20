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
    <div className={`relative z-0 flex flex-col h-screen w-full bg-cover bg-center ${darkMode ? "bg-green bg-[url('/Orange-landscape.jpg')]" : "bg-[url('/Orange-landscape.jpg')]"}`}>
      <BgDecorations className="absolute z-10" />
      <div className="relative mt-[40vh] xl2:mx-40">
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
