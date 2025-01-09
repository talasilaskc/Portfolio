'use client'

import { motion } from 'framer-motion'
import { Brain, Lightbulb, Target, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const reasons = [
  {
    icon: Brain,
    title: 'AI & ML Expertise',
    description: 'Proven track record in developing AI solutions with practical applications in agriculture and renewable energy.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Demonstrated ability to tackle complex challenges, as shown by finalist positions in multiple hackathons and competitions.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Active member of technical communities with experience in collaborative projects and leadership roles.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Thinker',
    description: 'Created solutions that improved efficiency by up to 40% in real-world applications.',
  },
]

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

export function HireMe() {
  return (
    <section id="hire-me" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Why Hire Me?
        </motion.h2>
        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 text-center"
          >
            As a motivated AI and machine learning enthusiast, I bring a unique combination of technical expertise and practical problem-solving skills. My projects have demonstrated real-world impact in agriculture and renewable energy sectors, showcasing my ability to deliver innovative solutions that drive efficiency and results.
          </motion.p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={item}>
              <Card className="backdrop-blur bg-black/50 border-purple-500/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <reason.icon className="h-8 w-8 text-purple-500" />
                    <CardTitle className="text-xl font-semibold text-gray-200">
                      {reason.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

