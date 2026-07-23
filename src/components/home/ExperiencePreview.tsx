"use client"
import * as React from "react"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/Button"
import { ExperienceItem } from "@/components/ui/ExperienceItem"
import Link from "next/link"

const timelineData = [
  {
    company: "Sovos",
    role: "Software Engineer",
    date: "December 2025 — Present",
    description: "Working on enterprise tax software used to satisfy complex regulatory requirements across multiple jurisdictions. Integrated AI-assisted development workflows into Azure DevOps, developed backend services using C# and .NET, and designed internal automation tools for dependency management to improve engineering productivity.",
    tech: ["React", "TypeScript", "C#", ".NET", "Azure DevOps", "Docker"],
    current: true,
  },
  {
    company: "Messag",
    role: "Full Stack Developer",
    date: "2022 — 2024",
    description: "Worked on the frontend architecture of a SaaS platform focused on collection management and business process optimization. Collaborated on product architecture and contributed to the companion mobile application used to visualize operational reports.",
    tech: ["React", "React Native", "JavaScript", "Tailwind CSS"],
    current: false,
  },
  {
    company: "Emprendimientos Gastronómicos S.R.L.",
    role: "IT & Management Intern",
    date: "August 2025 — November 2025",
    description: "Focused on automation and internal business tooling. Designed AI-powered workflows using Google Gemini for OCR automation, significantly reducing manual processing of operational data.",
    tech: ["Python", "Google Gemini API", "OCR"],
    current: false,
  }
]

export function ExperiencePreview() {
  return (
    <Section variant="modular" id="experience" className="border-t border-[var(--color-border)]">
      <SectionHeader 
        title="Experience" 
        description="Professional progression and engineering impact across organizations." 
      />
      
      <div className="max-w-[800px] flex flex-col space-y-12">
        {timelineData.map((item, index) => (
          <ExperienceItem 
            key={index} 
            index={index} 
            compact={true} 
            {...item} 
          />
        ))}
        
        <div className="pt-8">
          <Link href="/experience" className={buttonVariants({ variant: "link", className: "group" })}>
            View full experience <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
