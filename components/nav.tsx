'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'About', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Activities & Involvement', href: '#activities' },
  { name: 'Why Hire Me?', href: '#hire-me' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            My Portfolio
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-purple-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/talasilaskc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-purple-500 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/srikrishnachaitanya-talasila-583857299/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-purple-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:talasilaskc@gmail.com"
              className="text-gray-200 hover:text-purple-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

