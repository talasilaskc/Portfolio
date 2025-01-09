'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'Broken Solar Panel Detector',
    description: 'YOLOv8-based model to detect broken, dirty, and powdery solar panels with 95% accuracy. Reduced maintenance time by 40% and increased solar panel uptime.',
    image: '/placeholder.svg?height=200&width=400',
    tags: ['Python', 'YOLOv8', 'Computer Vision', 'Deep Learning'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Plant Disease Detection Model',
    description: 'Developed using VGG19 pretrained network, achieving 57% accuracy in classifying diseases from leaf images. Applied transfer learning techniques for optimization.',
    image: '/placeholder.svg?height=200&width=400',
    tags: ['Python', 'TensorFlow', 'VGG19', 'Transfer Learning'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Shop Smart',
    description: 'Retail management system in C with inventory management, customer shopping carts, and employee operations. Improved data retrieval speed by 25%.',
    image: '/placeholder.svg?height=200&width=400',
    tags: ['C', 'Data Structures', 'Algorithms', 'Hash Tables'],
    github: '#',
    demo: '#',
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="h-full backdrop-blur bg-black/50 border-purple-500/20 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{project.description}</p>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

