'use client'

import { motion } from 'framer-motion'
import { Code2, Database, GitGraphIcon as Git, Layout, Server, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const skills = {
  'Programming Languages': [
    { name: 'Python', level: 90, icon: Code2 },
    { name: 'C', level: 85, icon: Code2 },
    { name: 'C++', level: 80, icon: Code2 },
    { name: 'Java', level: 75, icon: Code2 },
  ],
  'Machine Learning': [
    { name: 'TensorFlow', level: 85, icon: Server },
    { name: 'Basic Algorithms', level: 80, icon: Server },
  ],
  'Databases & Version Control': [
    { name: 'MySQL', level: 75, icon: Database },
    { name: 'MongoDB', level: 70, icon: Database },
    { name: 'Git', level: 85, icon: Git },
    { name: 'GitHub', level: 85, icon: Git },
  ],
  'Other Skills': [
    { name: 'Windows', level: 90, icon: Layout },
    { name: 'Linux', level: 80, icon: Layout },
    { name: 'Team Work', level: 95, icon: Users },
    { name: 'Creative Thinking', level: 90, icon: Users },
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
                <CardContent className="space-y-6">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-medium text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-purple-500/20 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-cyan-500"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

