import Hero from './components/Hero'
import Footer from './components/Footer'
import BrandStrip from './components/BrandStrip'
import ProjectsGrid from './components/ProjectsGrid'
import AboutSection from './components/AboutSection'
import KontakSection from './components/KontakSection'
import FaqSection from './components/FaqSection'
import OurProjects from './components/OurProjects'

export default function HomePage() {
  return (
    <>
      <Hero />
        <ProjectsGrid /> 
        <OurProjects />
        <AboutSection />
      <FaqSection />
      <KontakSection /> 
      <Footer />
    </>
  )
}
