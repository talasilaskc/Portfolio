'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: 'B.Tech in VNR VJIET',
    date: '2022 - Present',
    description: 'Pursuing CSE with a current CGPA of 8.99 (5th semester)',
    achievements: [
      'Finalist in AI system development for solar cell health checks',
      'Advanced to second round in Turing Cup coding contest',
      'Finalist in Hack4SDG at IIT Hyderabad',
    ],
  },
  {
    title: 'Computer Society of India (CSI)',
    date: '2022 - 2023',
    description: 'Active Member',
    achievements: [
      'Participated in technical events and workshops',
      'Contributed to community projects',
      'Collaborated with team members on various initiatives',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Experience & Education
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500" />
          {experiences.map((exp, index) => (
            <motion.div key={exp.title} variants={item} className="mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              </div>
              <Card className="relative ml-8 md:ml-0 md:even:ml-[calc(50%+1rem)] md:odd:mr-[calc(50%+1rem)] backdrop-blur bg-black/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-200">
                    {exp.title}
                  </CardTitle>
                  <p className="text-sm text-purple-500">{exp.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

