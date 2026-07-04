import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Collections } from '@/components/Collections'
import { AtelierCards } from '@/components/AtelierCards'
import { BookingForm } from '@/components/BookingForm'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Header />
      <section id="hero-section">
        <Hero />
      </section>
      <section id="collections-section">
        <Collections />
      </section>
      <section id="atelier-section">
        <AtelierCards />
      </section>
      <section id="booking-section">
        <BookingForm />
      </section>
      <Footer />
    </main>
  )
}
