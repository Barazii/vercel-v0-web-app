import { Hero } from "@/components/sections/Hero"
import { FeaturedContent } from "@/components/sections/FeaturedContent"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { Services } from "@/components/sections/Services"
import { NewsletterCTA } from "@/components/sections/NewsletterCTA"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedContent />
      <CaseStudies />
      <Services />
      <NewsletterCTA />
    </div>
  )
}
