"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Typography } from "@/components/ui/Typography"
import { ArrowRight } from "lucide-react"

export function EngineeringApproach() {
  return (
    <Section variant="editorial" id="approach" className="border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col space-y-8"
      >
        <Typography variant="mono" className="text-[var(--color-accent)]">
          Engineering Approach
        </Typography>
        
        <Typography variant="display-l" as="h2" className="max-w-[650px]">
          Code is read far more often than it is written.
        </Typography>
        
        <div className="space-y-6 text-[var(--color-secondary)] max-w-[600px]">
          <Typography variant="body-large">
            I believe software engineering is fundamentally about managing complexity. Good systems emerge from clear constraints, thoughtful architecture and continuous refinement—not from using the newest technologies available.
          </Typography>
          <Typography variant="body-large">
            Whenever possible I automate repetitive work, simplify development workflows and build solutions that remain understandable months or years after they are written.
          </Typography>
          <Typography variant="body-large">
            Technology should empower teams to move faster without sacrificing maintainability.
          </Typography>
        </div>

        <div className="pt-4">
          <a href="#approach-full" className="inline-flex items-center text-[var(--color-primary)] font-medium underline-offset-4 hover:underline">
            Read full engineering philosophy <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
