'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = "/MY RESUME.pdf"; // Replace with actual path
    link.download = 'Sri_Krishna_Chaitanya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 lg:px-20 relative">
      {/* Left Side Content */}
      <div className="max-w-2xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent "
        >
          Sri Krishna Chaitanya Talasila
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          An AI & ML enthusiast passionate about solving real-world challenges with innovative technology. 
          I'm curious about creating impactful solutions in agriculture, renewable energy, and beyond.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 rounded-full px-6 py-3 text-lg shadow-lg"
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border border-gray-300 text-gray-300 px-6 py-3 rounded-full text-lg hover:bg-gray-800 hover:border-gray-500"
            onClick={handleScrollToContact}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-end mt-10 md:mt-0"
      >
        <img
          src="/My pic_cropped.jpg"
          alt="Sri Krishna Chaitanya Talasila"
          className="w-auto h-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 
           max-h-[80vh] md:max-h-[70vh] rounded-2xl object-contain"
        />
      </motion.div>

      {/* Subtle Arrow Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 animate-bounce text-gray-400" />
      </motion.div>
    </section>
  )
}
