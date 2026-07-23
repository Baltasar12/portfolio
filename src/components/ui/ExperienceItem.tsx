"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/ui/Typography"
import { Badge } from "@/components/ui/Badge"

export interface ExperienceItemProps {
  company: string
  role: string
  date: string
  description: string
  tech?: string[]
  highlights?: string[]
  current?: boolean
  compact?: boolean
  index?: number
}

export function ExperienceItem({ 
  company, 
  role, 
  date, 
  description, 
  tech = [], 
  highlights = [],
  current = false,
  compact = false,
  index = 0
}: ExperienceItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col md:flex-row md:space-x-8 group"
    >
      <div className="md:w-[200px] flex flex-col space-y-1 flex-shrink-0 mb-4 md:mb-0 pt-1">
        <Typography variant="mono" className="text-[var(--color-primary)]">
          {date}
        </Typography>
        {current && <Badge variant="status" className="w-fit mt-2">Current</Badge>}
      </div>
      
      <div className="flex flex-col space-y-4 flex-grow">
        <div>
          <Typography variant="heading" as="h3">{role}</Typography>
          <Typography variant="body" className="text-[var(--color-secondary)]">{company}</Typography>
        </div>
        
        <Typography variant="body" className="text-[var(--color-secondary)] max-w-[600px]">
          {description}
        </Typography>
        
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tech.map((t) => (
              <Badge key={t} variant="default">{t}</Badge>
            ))}
          </div>
        )}

        {!compact && highlights.length > 0 && (
          <div className="pt-4 space-y-2">
            <Typography variant="mono" className="text-[var(--color-primary)] uppercase tracking-wider text-xs font-semibold mb-3">
              Key Contributions
            </Typography>
            <ul className="space-y-2">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1.5 text-xs">•</span>
                  <Typography variant="body" className="text-[var(--color-secondary)] leading-relaxed">
                    {highlight}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}
