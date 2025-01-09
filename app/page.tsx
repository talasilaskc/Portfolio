import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { HireMe } from '@/components/hire-me'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <HireMe />
      <Contact />
    </div>
  )
}

