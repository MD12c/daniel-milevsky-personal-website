import { useState } from 'react'
import Navigation from './components/navigation.jsx'
import AboutMe from './components/aboutMe.jsx'
import Projects from './components/projects.jsx'
import ContactMe from './components/contactMe.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex bg-gray-300 overflow-hidden flex-col">
        <Header />
        <Navigation />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
    </div>
  )
}

export default App
