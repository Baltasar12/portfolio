"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Typography } from "@/components/ui/Typography"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "AI-Assisted Dependency Management",
    summary: "Designed an internal automation system capable of upgrading NuGet dependencies across enterprise repositories while integrating AI assistance for complex upgrade scenarios.",
    outcome: "Improved engineering productivity and streamlined enterprise dependency management at scale.",
    tech: ["Azure DevOps", "AI", "NuGet", "CI/CD", "Automation"],
    type: "INTERNAL DEVELOPER PLATFORM",
  },
  {
    title: "Enterprise Import Pipeline",
    summary: "Implemented support for automatic payer short name generation inside a legacy enterprise import engine while maintaining compatibility with existing validation rules.",
    outcome: "Enhanced legacy system capabilities without breaking existing enterprise validation rules.",
    tech: ["Delphi", "Oracle", "Import Engine", "Enterprise Software"],
    type: "LEGACY MODERNIZATION",
  },
  {
    title: "AI Code Review Integration",
    summary: "Integrated Devin AI into Azure DevOps pipelines to automate pull request reviews.",
    outcome: "Improved engineering productivity and developer experience during the code review process.",
    tech: ["Devin AI", "Azure DevOps", "Pull Requests"],
    type: "AI AUTOMATION",
  },
  {
    title: "World Cup Prediction Engine",
    summary: "Designed a prediction platform using statistical models, FastAPI and modern frontend technologies.",
    outcome: "Delivered a scalable prediction engine leveraging machine learning and statistics.",
    tech: ["Python", "FastAPI", "Machine Learning", "Statistics"],
    type: "PERSONAL PROJECT",
  }
]

export function FeaturedCaseStudies() {
  return (
    <Section variant="modular" id="case-studies" className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <SectionHeader 
        title="Featured Case Studies" 
        description="Detailed technical breakdowns of complex engineering problems and their architectural solutions." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="h-full flex flex-col border-transparent hover:border-[var(--color-border)] transition-colors">
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <Typography variant="body" className="text-[var(--color-secondary)] pt-2">
                  {study.summary}
                </Typography>
              </CardHeader>
              <CardContent className="flex-grow">
                <Typography variant="small" className="font-medium text-[var(--color-primary)]">
                  Outcome
                </Typography>
                <Typography variant="small" className="text-[var(--color-secondary)]">
                  {study.outcome}
                </Typography>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-6">
                <div className="flex flex-wrap gap-2">
                  {study.tech.map(t => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <Typography variant="mono" className="text-[var(--color-accent)] uppercase tracking-wider text-xs font-semibold">
                  {study.type}
                </Typography>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
