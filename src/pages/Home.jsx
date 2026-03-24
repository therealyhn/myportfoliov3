import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import AboutSection from '../components/sections/AboutSection'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const timeout = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      return () => clearTimeout(timeout)
    }
  }, [hash])

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </>
  )
}

export default Home
