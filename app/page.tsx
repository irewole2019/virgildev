import { Header } from "@/components/header"
import { DevHero } from "@/components/dev/dev-hero"
import { DevProblem } from "@/components/dev/dev-problem"
import { DevSolution } from "@/components/dev/dev-solution"
import { DevDemo } from "@/components/dev/dev-demo"
import { DevFeatures } from "@/components/dev/dev-features"
import { DevPricing } from "@/components/dev/dev-pricing"
import { DevSocialProof } from "@/components/dev/dev-social-proof"
import { DevSecurity } from "@/components/dev/dev-security"
import { DevFAQ } from "@/components/dev/dev-faq"
import { DevCTA } from "@/components/dev/dev-cta"
import { Footer } from "@/components/footer"
import { DevStory } from "@/components/dev/dev-story"
import { DevDifferentiation } from "@/components/dev/dev-differentiation"
import { DevHowItWorks } from "@/components/dev/dev-how-it-works"

export const metadata = {
  title: "VirgilDev - Understand any codebase instantly",
  description: "Ask your repo anything — get clear AI explanations, architecture maps, and documentation in minutes.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DevHero />
      <DevStory />
      <DevDifferentiation />
      <DevHowItWorks />
      <DevDemo />
      <DevProblem />
      <DevSolution />
      <DevFeatures />
      <DevPricing />
      <DevSocialProof />
      <DevSecurity />
      <DevFAQ />
      <DevCTA />
      <Footer />
    </main>
  )
}
