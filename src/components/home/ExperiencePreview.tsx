"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Typography } from "@/components/ui/Typography"
import { Badge } from "@/components/ui/Badge"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

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
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:space-x-8 group"
          >
            <div className="md:w-[200px] flex flex-col space-y-1 flex-shrink-0 mb-4 md:mb-0 pt-1">
              <Typography variant="mono" className="text-[var(--color-primary)]">{item.date}</Typography>
              {item.current && <Badge variant="status" className="w-fit mt-2">Current</Badge>}
            </div>
            
            <div className="flex flex-col space-y-3">
              <div>
                <Typography variant="heading" as="h3">{item.role}</Typography>
                <Typography variant="body" className="text-[var(--color-secondary)]">{item.company}</Typography>
              </div>
              
              <Typography variant="body" className="text-[var(--color-secondary)] max-w-[550px]">
                {item.description}
              </Typography>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((tech) => (
                  <Badge key={tech} variant="default">{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        
        <div className="pt-8">
          <Button variant="link" className="group">
            View full experience <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Section>
  )
}
