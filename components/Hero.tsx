'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const heroImages = [
  '/DownReels_20260704_100512.jpg',
  '/DownReels_20260704_100518.jpg',
  '/DownReels_20260704_113934.jpg',
  '/DownReels_20260704_100756.jpg',
]

export function Hero() {
  return (
    <section 
      className="pt-32 pb-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-6xl md:text-7xl font-light leading-tight text-balance mb-6"
            >
              Exquisite Elegance,
              <span className="text-accent"> Bespoke</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground font-light leading-relaxed mb-8"
            >
              Experience the pinnacle of haute couture. Each piece is a masterpiece, 
              crafted exclusively for your most extraordinary moments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="px-8 py-3 bg-accent text-background font-semibold hover:bg-accent/90 transition-colors">
                Explore Collections
              </button>
              <button className="px-8 py-3 border border-foreground text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors">
                VIP Booking
              </button>
            </motion.div>
          </div>

          {/* Right Column - Images Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {heroImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`BEAM Apparels Collection ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={idx === 0}
                  loading="eager"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
