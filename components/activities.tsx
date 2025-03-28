'use client'

import { motion } from 'framer-motion'
import { Award, ArrowUpRight, MapPin, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState, useEffect } from 'react'

// Simplified activities data
const activities = [
  {
    title: "Finalist in Hack4SDG Hackathon",
    roles: ["Team Leader"],
    description: "As the Team Lead and Finalist in a competition with over 300+ teams, I spearheaded a drone data analytics project focused on revolutionizing agriculture through precision farming. Our team developed an innovative solution that integrates multiple sensors, including NDVI, NDRE, thermal, and multispectral, to capture real-time crop health data. We utilized AI-driven analytics to detect issues such as water stress, nutrient deficiencies, and disease, providing actionable insights for resource optimization. Our platform enables farmers to make data-driven decisions on irrigation, fertilization, and pest control, promoting sustainable and efficient farming practices.",
    venue: "IIT Hyderabad, Hyderabad",
    certificate: "/certificates/MJCET.jpg",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Technovista Hackathon",
    roles: ["ML Engineer"],
    description: "We developed a Plant Disease Detection System that leverages AI and deep learning to identify and classify up to 14 types of plant diseases from leaf images. By utilizing the VGG19 pretrained model and transfer learning, the system achieves accurate analysis, enabling early detection of diseases. This empowers farmers to take timely action, improving crop health and yield while reducing losses. The project seamlessly integrates image processing and machine learning techniques to provide an efficient and automated solution for disease detection, promoting sustainable farming practices. Additionally, the model is integrated into an AI chatbot, which not only identifies diseases but also provides information about their causes and actionable prevention strategies. All these features are presented through an intuitive, user-friendly website, offering farmers a comprehensive tool to manage plant health effectively.",
    venue: "VNR VJIET, Hyderabad",
    certificate: "/certificates/MJCET.jpg",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Webathon Hackathon",
    roles: ["Backend Developer","Web Integration Developer"],
    description: "Our team was tasked with developing a Student-Alumni Relationship Platform to foster meaningful interactions between students and alumni of a specific college. The frontend development was managed by my team, while I took responsibility for the backend development. The platform serves as a hub for communication, collaboration, and opportunity sharing, enabling alumni to guide students with insights and experiences while offering a space for networking and mentorship. Although we didn't win the competition, we received special appreciation from the evaluator for successfully developing a fully functional, front-end and back-end integrated website within just 24 hours. This recognition highlighted our ability to collaborate effectively under pressure, deliver a complete solution within a tight deadline, and showcase technical proficiency in both frontend and backend development.",
    venue: "VNR VJIET, Hyderabad",
    certificate: "/certificates/MJCET.jpg",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Finalist in DataNyx Hackathon",
    roles: ["ML Engineer"],
    description: "We developed a website that integrates an ML model and an AI chatbot to provide intelligent crop recommendations. The ML model analyzes environmental factors, soil conditions, and other parameters to recommend the most suitable crop for the user. The integration of the AI chatbot enhances the user experience by offering personalized suggestions and guidance based on the ML model's output.",
    venue: "MJCET, Hyderabad",
    certificate: "/certificates/MJCET.jpg",
    gradient: "from-purple-500 to-pink-500"
  }
];

export function Activities() {
  // State for tracking modal visibility and certificate URL
  const [modalVisible, setModalVisible] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState("");
  
  // Debug log when state changes
  useEffect(() => {
    console.log("Modal visibility:", modalVisible);
    console.log("Certificate URL:", certificateUrl);
  }, [modalVisible, certificateUrl]);

  // Function to show certificate with proper TypeScript type
  function showCertificate(url: string): void {
    console.log("Show certificate called with URL:", url);
    setCertificateUrl(url);
  
    // Use a useEffect hook to ensure modal opens only after URL is set
    setTimeout(() => {
      setModalVisible(true);
    }, 100);
  }
  

  // Function to close the modal
  function closeModal(): void {
    console.log("Closing modal");
    setModalVisible(false);
  }

  return (
    <section id="activities" className="py-24 relative">
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
                  
                  {activity.certificate && (
                    
                    <button
                    type="button"
                    onClick={() => {
                      console.log("Button Clicked!"); // Check if this prints
                      console.log("View Certificate button clicked! Certificate URL:", activity?.certificate);
                      
                      setCertificateUrl(activity?.certificate);
                  
                      setTimeout(() => {
                        console.log("Opening modal...");
                        setModalVisible(true);
                      }, 100);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 transition-all duration-200 hover:scale-105 font-medium"
                  >
                    <Award className="h-5 w-5" />
                    View Certificate
                  </button>
                  
                  
                  
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal - Direct inline implementation */}
      {modalVisible && certificateUrl && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => {
            console.log("Modal backdrop clicked, closing");
            setModalVisible(false);
          }}
        >
          <div 
            className="relative w-[90vw] h-[90vh] bg-black/90 p-4 rounded-lg shadow-2xl border border-purple-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalVisible(false)}
              className="absolute top-2 right-2 text-white hover:text-purple-500 transition-colors p-2 rounded-full border border-purple-500/20 hover:border-purple-500/50"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="relative max-h-[85vh] max-w-full">
                <img
                  src={certificateUrl}
                  alt="Certificate"
                  className="max-h-[80vh] object-contain rounded-lg"
                  onError={(e) => {
                    console.error('Failed to load image:', certificateUrl);
                    alert(`Failed to load certificate: ${certificateUrl}. Please check the file path.`);
                  }}
                  onLoad={() => console.log('Certificate loaded successfully')}
                />
              </div>
              
              <p className="text-white text-sm mt-4">
                Certificate: {certificateUrl.split('/').pop()}
              </p>
              
              <p className="text-gray-400 text-xs mt-2">
                Path: {certificateUrl}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}