'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: 'B.Tech in Computer Science',
    institution: 'VNR VJIET',
    period: '2022 - Present',
    description: 'Pursuing CSE with a current CGPA of 8.66 (6th semester)',
    achievements: [
      'Active member of various technical clubs',
      'Participated in multiple hackathons and coding competitions',
      'Maintained consistent academic performance'
    ]
  },
  {
    title: 'Intermediate Education',
    institution: 'Sri Chaitanya Junior College',
    period: '2020 - 2022',
    description: ' Successfully completed intermediate education with good academic performance, demonstrating a strong aptitude in mathematics, physics, and chemistry.',
    achievements: [
      'Passed out with 97.1 percentage in board exams',
      'Secured 1786 rank in TSEAMCET',
      'Achieved 97.1 percentile in JEE Mains'
    ]
  },
  {
    title: '10th Education',
    institution: 'Sri Chaitanya School',
    period: '2019 - 2020',
    description: 'Successfully completed 10th grade with excellent academic performance, showcasing strong proficiency in core subjects.',
    achievements: [
      'Passed out with 10 GPA in board exams'
    ]
  }
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
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Education
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
                  <p className="text-purple-500">{exp.institution}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

