import Header from '@/components/header'
import Hero from '@/components/hero'
import StatsBanner from '@/components/stats-banner'
import PricingCards from '@/components/pricing-cards'
import Countdown from '@/components/countdown'
import IndividualSales from '@/components/individual-sales'
import ContactFooter from '@/components/contact-footer'

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <StatsBanner />
      <PricingCards />
      <Countdown />
      <IndividualSales />
      <ContactFooter />
    </main>
  )
}
