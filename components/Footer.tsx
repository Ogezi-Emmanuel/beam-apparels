'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Bespoke Tailoring', action: () => scrollToSection('atelier-section') },
        { label: 'Collections', action: () => scrollToSection('collections-section') },
        { label: 'Private Showings', action: () => scrollToSection('booking-section') },
        { label: 'Alterations', action: () => scrollToSection('atelier-section') },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'Our Story', action: () => scrollToSection('hero-section') },
        { label: 'Craftsmanship', action: () => scrollToSection('atelier-section') },
        { label: 'The Atelier', action: () => scrollToSection('atelier-section') },
        { label: 'Blog', action: () => window.open('https://www.instagram.com/beamapparel_luxury/', '_blank') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Booking', action: () => scrollToSection('booking-section') },
        { label: 'Support', action: () => window.open('https://wa.me/2347039949052', '_blank') },
        { label: 'Gift Cards', action: () => scrollToSection('booking-section') },
        { label: 'Press', action: () => window.open('https://instagram.com/beamapparels', '_blank') },
      ],
    },
  ]

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/2026-07-04.png"
                alt="BEAM Apparels Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-serif text-xl font-semibold tracking-tight">BEAM APPARELS</span>
            </div>
            <p className="text-sm text-background/80 font-light">
              Exquisite bespoke couture for your most extraordinary moments.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-sm mb-4 text-accent">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <button
                      onClick={link.action}
                      className="text-sm text-background/70 hover:text-background transition-colors font-light text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-background/20 mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70 font-light"
        >
          <p>© {currentYear} BEAM Apparels. All rights reserved.</p>
          <div className="flex gap-6">
            <button 
              onClick={() => window.open('#', '_blank')}
              className="hover:text-background transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => window.open('#', '_blank')}
              className="hover:text-background transition-colors"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => window.open('https://www.instagram.com/beamapparel_luxury/', '_blank')}
              className="hover:text-background transition-colors"
            >
              Instagram
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
