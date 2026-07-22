import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { ExperiencePreview } from "@/components/home/ExperiencePreview"
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies"
import { EngineeringApproach } from "@/components/home/EngineeringApproach"
import { LatestArticles } from "@/components/home/LatestArticles"
import { Contact } from "@/components/home/Contact"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <ExperiencePreview />
        <FeaturedCaseStudies />
        <EngineeringApproach />
        <LatestArticles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
