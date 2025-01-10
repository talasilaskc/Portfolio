'use client'

import { motion } from 'framer-motion'
import { 
  Code2, Database, GitGraphIcon as Git, Layout, Server, 
  Users, Cpu, BrainCircuit, FileCode2, Container, 
  Github, Terminal, Binary, Laptop, Video
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skills = {
  'Programming Languages': [
    { name: 'Python', icon: Terminal },
    { name: 'C', icon: FileCode2 },
    { name: 'C++', icon: Code2 },
    { name: 'Java', icon: Binary },
  ],
  'Machine Learning': [
    { name: 'TensorFlow', icon: BrainCircuit },
    { name: 'ML Algorithms', icon: Cpu },
  ],
  'Databases & Version Control': [
    { name: 'MySQL', icon: Database },
    { name: 'MongoDB', icon: Container },
    { name: 'Git', icon: Git },
    { name: 'GitHub', icon: Github },
  ],
  'Other Skills': [
    { name: 'Windows', icon: Layout },
    { name: 'Linux', icon: Server },
    { name: 'Team Work', icon: Users },
    { name: 'Video Editing', icon: Video },
  ],
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div key={category} variants={item}>
              <Card className="backdrop-blur bg-black/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-200">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {skillList.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="flex flex-col items-center justify-center gap-2 group"
                      >
                        <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                          <skill.icon className="h-8 w-8 text-purple-500" />
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

