import * as React from "react"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { ContactModal } from "@/components/layout/ContactModal"
import { Section } from "@/components/layout/Section"
import { Typography } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import { ExperienceItem } from "@/components/ui/ExperienceItem"
import { ContactTrigger } from "@/components/ui/ContactTrigger"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Experience | Baltasar Barbaglia",
  description: "Professional progression and engineering impact across organizations.",
}

const experienceData = [
  {
    company: "Sovos",
    role: "Software Engineer",
    date: "December 2025 — Present",
    description: "Working on enterprise tax software used to satisfy complex regulatory requirements across multiple jurisdictions. My work spans frontend development, backend services, internal tooling and engineering automation.",
    tech: ["React", "TypeScript", "C#", ".NET", "SQL Server", "Azure DevOps", "Docker", "Git"],
    highlights: [
      "Built React interfaces for enterprise tax products.",
      "Developed backend services using C# and .NET.",
      "Integrated AI-assisted development workflows into Azure DevOps.",
      "Designed internal automation tools for dependency management.",
      "Improved engineering productivity through CI/CD automation.",
      "Wrote automated tests for critical business workflows."
    ],
    current: true,
  },
  {
    company: "Messag",
    role: "Full Stack Developer",
    date: "2022 — 2024",
    description: "Worked on the frontend architecture of a SaaS platform focused on collection management and business process optimization. Also contributed to the companion mobile application used to visualize operational reports.",
    tech: ["React", "React Native", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Developed responsive React interfaces.",
      "Improved UX across multiple workflows.",
      "Built mobile features using React Native.",
      "Implemented reusable UI components.",
      "Collaborated on product architecture."
    ],
    current: false,
  },
  {
    company: "Emprendimientos Gastronómicos S.R.L.",
    role: "IT & Management Intern",
    date: "August 2025 — November 2025",
    description: "Focused on automation and internal business tooling. Designed AI-powered workflows that reduced manual processing of operational data.",
    tech: ["Python", "Google Gemini API", "OCR"],
    highlights: [
      "OCR automation using Google Gemini.",
      "Python scripting.",
      "Internal analytics.",
      "Process optimization."
    ],
    current: false,
  },
  {
    company: "FALK Impellers",
    role: "Administrative & Support Assistant",
    date: "April 2025 — August 2025",
    description: "Provided operational support while improving internal processes and technical workflows.",
    tech: [],
    highlights: [],
    current: false,
  }
]

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col items-center w-full min-h-screen pt-32 pb-16">
        <Section variant="editorial" className="mb-8">
          <div className="space-y-4 max-w-[800px]">
            <Typography variant="display-l" as="h1">
              Experience
            </Typography>
            <Typography variant="body-large" className="text-[var(--color-secondary)]">
              Professional progression and engineering impact across organizations.
            </Typography>
          </div>
        </Section>
        
        <Section variant="modular" className="border-t border-[var(--color-border)] pt-16 pb-16">
          <div className="max-w-[800px] flex flex-col space-y-16">
            {experienceData.map((item, index) => (
              <div key={index} className={index !== experienceData.length - 1 ? "pb-16 border-b border-[var(--color-border)]" : ""}>
                <ExperienceItem 
                  index={index} 
                  compact={false} 
                  {...item} 
                />
              </div>
            ))}
          </div>
        </Section>

        <Section variant="editorial" className="border-t border-[var(--color-border)] mt-16 pt-16 pb-16 text-center">
          <div className="max-w-[600px] mx-auto space-y-8">
            <Typography variant="heading" as="h2" className="text-2xl">
              Interested in working together?
            </Typography>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/resume/Baltasar_Barbaglia_FullStack_Developer.pdf" download>
                <Button variant="secondary" size="lg">
                  Download Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <ContactTrigger />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <ContactModal />
    </>
  )
}
