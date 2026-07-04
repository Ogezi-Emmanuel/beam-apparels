'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const collections = [
  {
    name: 'Bridal Dreams',
    description: 'Ethereal gowns for your most enchanting day',
    images: [
      '/DownReels_20260704_100512.jpg',
      '/DownReels_20260704_100518.jpg',
      '/DownReels_20260704_100521.jpg',
    ],
    color: '#e63e7b',
  },
  {
    name: 'Prom Elegance',
    description: 'Show-stopping designs for unforgettable nights',
    images: [
      '/DownReels_20260704_100637.jpg',
      '/DownReels_20260704_100639.jpg',
    ],
    color: '#a78bfa',
  },
  {
    name: 'Red Carpet Glamour',
    description: 'Statement pieces that demand the spotlight',
    images: [
      '/DownReels_20260704_100641.jpg',
      '/DownReels_20260704_100726.jpg',
      '/DownReels_20260704_100727.jpg',
    ],
    color: '#dc2626',
  },
  {
    name: 'Corsetry Couture',
    description: 'Sculpted perfection meets artistic design',
    images: [
      '/DownReels_20260704_100756.jpg',
      '/DownReels_20260704_100758.jpg',
    ],
    color: '#059669',
  },
  {
    name: 'Evening Luxury',
    description: 'Timeless elegance for special occasions',
    images: [
      '/DownReels_20260704_100800.jpg',
      '/DownReels_20260704_100802.jpg',
    ],
    color: '#1d4ed8',
  },
  {
    name: 'Modern Chic',
    description: 'Contemporary designs with classic sophistication',
    images: [
      '/DownReels_20260704_113934.jpg',
      '/DownReels_20260704_114029.jpg',
    ],
    color: '#0891b2',
  },
  {
    name: 'Haute Couture',
    description: 'Premium custom designs crafted to perfection',
    images: [
      '/DownReels_20260704_100641.jpg',
      '/DownReels_20260704_114034.jpg',
    ],
    color: '#7c3aed',
  },
  {
    name: 'Gala Collection',
    description: 'Opulent pieces for the grandest events',
    images: [
      '/DownReels_20260704_100521.jpg',
      '/DownReels_20260704_100637.jpg',
    ],
    color: '#b91c1c',
  },
]

export function Collections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-4 text-balance">
            Collections
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Curated selections for every occasion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square mb-4">
                <Image
                  src={collection.images[0]}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={idx < 4 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              <h3 className="font-serif text-2xl font-light mb-2">
                {collection.name}
              </h3>
              <p className="text-muted-foreground font-light">
                {collection.description}
              </p>
              
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-accent mt-4"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
