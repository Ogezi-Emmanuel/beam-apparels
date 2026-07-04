'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/2026-07-04.png"
            alt="BEAM Apparels Logo"
            width={48}
            height={48}
            className="w-12 h-12"
            priority
          />
          <span className="font-serif text-lg font-semibold tracking-tight hidden sm:inline">BEAM APPARELS</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={scrollToBooking}
            className="hover:text-accent transition-colors"
          >
            Collections
          </button>
          <button 
            onClick={scrollToBooking}
            className="hover:text-accent transition-colors"
          >
            Atelier
          </button>
          <button 
            onClick={scrollToBooking}
            className="hover:text-accent transition-colors"
          >
            Consultation
          </button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={scrollToBooking}
          className="px-6 py-2 bg-accent text-background font-semibold text-sm hover:bg-accent/90 transition-colors"
        >
          Book Now
        </button>
      </div>
    </header>
  )
}
