import Header from '@/components/header'
import Countdown from '@/components/countdown'
import IndividualSales from '@/components/individual-sales'
import ContactFooter from '@/components/contact-footer'

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Countdown />
      <IndividualSales />
      <ContactFooter />
    </main>
  )
}
