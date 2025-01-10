import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { HireMe } from '@/components/hire-me'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Activities } from '@/components/activities'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Skills />
      <Experience />
      <div className="flex flex-col gap-24">
        <Projects />
        <Activities />
      </div>
      <HireMe />
      <Contact />
    </div>
  )
}

