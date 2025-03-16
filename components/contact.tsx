'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [status, setStatus] = useState(""); // ✅ State for success/error message
  const formRef = useRef<HTMLFormElement>(null); // ✅ Store form reference

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return; // ✅ Ensure form exists before proceeding

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/xqapakyg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();
      console.log("Response:", result); // ✅ Log response for debugging

      if (response.ok) {
        setStatus("✅ Message sent successfully! I'll get back to you soon.");
        formRef.current.reset(); // ✅ Reset the form using ref
      } else {
        setStatus(`❌ Error: ${result.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full backdrop-blur bg-black/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-200">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="tel:+918919100257"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +91 89191 00257
                </a>
                <a
                  href="mailto:talasilaskc@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  talasilaskc@gmail.com
                </a>
                <a
                  href="https://github.com/talasilaskc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/srikrishnachaitanya-talasila-583857299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn Profile
                </a>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur bg-black/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-200">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-purple-500/10 border-purple-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="bg-purple-500/10 border-purple-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="bg-purple-500/10 border-purple-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="min-h-[150px] bg-purple-500/10 border-purple-500/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                  >
                    Send Message
                  </Button>
                </form>
                {/* ✅ Success/Error Message */}
                {status && (
                  <p className="mt-4 text-center text-white bg-purple-700/50 p-2 rounded-lg">
                    {status}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
