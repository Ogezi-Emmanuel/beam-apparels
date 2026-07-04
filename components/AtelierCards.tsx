'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const atelierCards = [
  {
    title: 'Handcrafted Excellence',
    description: 'Every stitch is a testament to our commitment to perfection',
    image: '/DownReels_20260704_100512.jpg',
  },
  {
    title: 'Fabric Selection',
    description: 'Sourced from the finest mills across Europe and beyond',
    image: '/DownReels_20260704_100518.jpg',
  },
  {
    title: 'Personal Consultation',
    description: 'Work directly with our master designers for your vision',
    image: '/DownReels_20260704_100521.jpg',
  },
  {
    title: 'VIP Experience',
    description: 'Exclusive access to limited editions and private showings',
    image: '/DownReels_20260704_100637.jpg',
  },
  {
    title: 'Custom Tailoring',
    description: 'Perfect fit ensured through multiple fittings and adjustments',
    image: '/DownReels_20260704_100639.jpg',
  },
  {
    title: 'Lifetime Support',
    description: 'Alterations and maintenance included for life',
    image: '/DownReels_20260704_100641.jpg',
  },
  {
    title: 'Atelier Craftsmanship',
    description: 'Traditional techniques meet modern innovation',
    image: '/DownReels_20260704_100726.jpg',
  },
  {
    title: 'Design Excellence',
    description: 'Award-winning designs that stand out from the crowd',
    image: '/DownReels_20260704_100727.jpg',
  },
  {
    title: 'Luxury Experience',
    description: 'Pampering service from consultation to final fitting',
    image: '/DownReels_20260704_100756.jpg',
  },
  {
    title: 'Premium Fittings',
    description: 'Multiple adjustments to achieve flawless fit',
    image: '/DownReels_20260704_100758.jpg',
  },
  {
    title: 'Exclusive Collections',
    description: 'Limited edition designs available only to VIP clients',
    image: '/DownReels_20260704_100800.jpg',
  },
  {
    title: 'Artisanal Details',
    description: 'Intricate embellishments and hand-finished touches',
    image: '/DownReels_20260704_100802.jpg',
  },
  {
    title: 'Signature Pieces',
    description: 'Iconic designs that define our brand aesthetic',
    image: '/DownReels_20260704_113934.jpg',
  },
  {
    title: 'Modern Elegance',
    description: 'Contemporary designs with timeless appeal',
    image: '/DownReels_20260704_114029.jpg',
  },
  {
    title: 'Luxury Redefined',
    description: 'Opulent fabrics and impeccable construction',
    image: '/DownReels_20260704_100639.jpg',
  },
  {
    title: 'Grand Finale',
    description: 'Show-stopping pieces for unforgettable moments',
    image: '/DownReels_20260704_114034.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function AtelierCards() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-4 text-balance">
            Atelier Expertise
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            The art and craft of luxury bespoke design
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {atelierCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden aspect-square mb-4 bg-border">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="font-serif text-xl font-light mb-2 group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
