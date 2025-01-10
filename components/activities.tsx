'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const activities = [
  {
    title: "Finalist in Hack4SDG Hackathon",
    roles: ["Team Leader", ""],
    description: "As the Team Lead and Finalist in a competition with over 300+ teams, I spearheaded a drone data analytics project focused on revolutionizing agriculture through precision farming. Our team developed an innovative solution that integrates multiple sensors, including NDVI, NDRE, thermal, and multispectral, to capture real-time crop health data. We utilized AI-driven analytics to detect issues such as water stress, nutrient deficiencies, and disease, providing actionable insights for resource optimization. Our platform enables farmers to make data-driven decisions on irrigation, fertilization, and pest control, promoting sustainable and efficient farming practices.",
    venue: "IIT Hyderabad, Hyderabad",
    links: [
      {
        label: "Project Demo",
        url: "https://yourproject.com"
      },
      {
        label: "GitHub Repo",
        url: "https://github.com/yourusername/project"
      }
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Technovista Hackathon",
    roles: ["ML Engineer"],
    description: "We developed a Plant Disease Detection System that leverages AI and deep learning to identify and classify up to 14 types of plant diseases from leaf images. By utilizing the VGG19 pretrained model and transfer learning, the system achieves accurate analysis, enabling early detection of diseases. This empowers farmers to take timely action, improving crop health and yield while reducing losses. The project seamlessly integrates image processing and machine learning techniques to provide an efficient and automated solution for disease detection, promoting sustainable farming practices. Additionally, the model is integrated into an AI chatbot, which not only identifies diseases but also provides information about their causes and actionable prevention strategies. All these features are presented through an intuitive, user-friendly website, offering farmers a comprehensive tool to manage plant health effectively.",
    venue: "VNR VJIET, Hyderabad",
    links: [
      {
        label: "Project Demo",
        url: "https://ieee.org/event"
      }
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Webathon Hackathon",
    roles: ["Backend Developer","Web Integration Developer"],
    description: "Our team was tasked with developing a Student-Alumni Relationship Platform to foster meaningful interactions between students and alumni of a specific college. The frontend development was managed by my team, while I took responsibility for the backend development. The platform serves as a hub for communication, collaboration, and opportunity sharing, enabling alumni to guide students with insights and experiences while offering a space for networking and mentorship. Although we didn’t win the competition, we received special appreciation from the evaluator for successfully developing a fully functional, front-end and back-end integrated website within just 24 hours. This recognition highlighted our ability to collaborate effectively under pressure, deliver a complete solution within a tight deadline, and showcase technical proficiency in both frontend and backend development.",
    venue: "VNR VJIET, Hyderabad",
    links: [
      {
        label: "Project Demo",
        url: "https://ieee.org/event"
      }
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  
  {
    title: "Finalist in DataNyx Hackathon",
    roles: ["ML Engineer"],
    description: "We developed a website that integrates an ML model and an AI chatbot to provide intelligent crop recommendations. The ML model analyzes environmental factors, soil conditions, and other parameters to recommend the most suitable crop for the user. The integration of the AI chatbot enhances the user experience by offering personalized suggestions and guidance based on the ML model's output.",
    venue: "MJCET, Hyderabad",
    links: [
      {
        label: "Project Demo",
        url: "https://ieee.org/event"
      }
    ],
    gradient: "from-purple-500 to-pink-500"
  }
]

export function Activities() {
  return (
    <section id="activities" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Activities & Involvement
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="group relative overflow-hidden border-2 border-transparent bg-black/50 transition-colors hover:border-purple-500/50">
                <div className={`absolute inset-0 opacity-0 bg-gradient-to-r ${activity.gradient} transition-opacity group-hover:opacity-5`} />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl font-semibold text-gray-200">
                    {activity.title}
                    <ArrowUpRight className="h-5 w-5 text-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    {activity.venue}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activity.roles.filter(Boolean).map((role, index) => (
                      <span 
                        key={index} 
                        className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-500"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {activity.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-purple-500 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 