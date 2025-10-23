import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { ValueProposition } from "@/components/value-proposition"
import { Differentiation } from "@/components/differentiation"
import { Offer } from "@/components/offer"
import { CaseStudy } from "@/components/case-study"
import { Security } from "@/components/security"
import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "VirgilDev for Companies - Modernization Intelligence Accelerator",
  description:
    "Turn your legacy codebase into a modern, AI-readable system in 14 days. Enterprise-grade modernization intelligence.",
}

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <ValueProposition />
      <Differentiation />
      <Offer />
      <CaseStudy />
      <Security />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
