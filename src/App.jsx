import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Navbar from './sections/Navbar'
import SideBar from './components/SideBar'
import Footer from './sections/Footer'
import Mywork from './sections/Mywork'



export default function App() {
  return (
    <>

      <Navbar />
      <SideBar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Mywork />
      <Contact />
      <Footer />

    </>
  )
}
