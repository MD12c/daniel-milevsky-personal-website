import { useState } from 'react'
import Navigation from './components/Navigation.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatIsToCome from './components/WhatIsToCome.jsx'

function App() {
  return (
    <div className="min-h-screen flex bg-ltGray flex-col">
      <div className="mt-[40vh]">
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

export default App
