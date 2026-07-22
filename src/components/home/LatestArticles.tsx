"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Typography } from "@/components/ui/Typography"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Building AI-assisted engineering workflows.",
    date: "Coming Soon",
    category: "AI Engineering",
  },
  {
    title: "Lessons learned integrating Devin AI into Azure DevOps.",
    date: "Coming Soon",
    category: "DevOps",
  },
  {
    title: "Enterprise dependency management at scale.",
    date: "Coming Soon",
    category: "Architecture",
  },
]

export function LatestArticles() {
  return (
    <Section variant="modular" id="articles" className="border-t border-[var(--color-border)]">
      <SectionHeader 
        title="Articles" 
        description="Thoughts on frontend architecture, design systems, and engineering leadership." 
      />
      
      <div className="flex flex-col space-y-6 max-w-[900px]">
        {articles.map((article, i) => (
          <motion.a
            key={i}
            href={`#article-${i}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-6 border-b border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="flex flex-col space-y-2">
              <Typography variant="heading" as="h3" className="group-hover:text-[var(--color-accent)] transition-colors">
                {article.title}
              </Typography>
              <div className="flex items-center space-x-3">
                <Typography variant="mono">{article.category}</Typography>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0 flex items-center text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors">
              <Typography variant="mono" className="mr-2 text-inherit">{article.date}</Typography>
              <ArrowRight className="h-4 w-4" />
            </div>
          </motion.a>
        ))}
        
        <div className="pt-8">
          <a href="#all-articles" className="inline-flex items-center text-[var(--color-primary)] font-medium underline-offset-4 hover:underline">
            View all articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  )
}
