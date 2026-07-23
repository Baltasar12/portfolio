"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/layout/Section"
import Link from "next/link"

export function Hero() {
  return (
    <Section variant="editorial" className="min-h-[85vh] flex flex-col justify-center pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col space-y-8"
      >
        <div className="space-y-4">
          <Typography variant="mono" className="text-[var(--color-accent)]">
            Baltasar Barbaglia — Full Stack Software Engineer
          </Typography>
          <Typography variant="display-xxl" as="h1" className="max-w-[700px]">
            Building enterprise software, AI-powered development workflows and scalable internal tools.
          </Typography>
        </div>

        <div className="flex flex-col space-y-4 text-[var(--color-secondary)] max-w-[650px]">
          <Typography variant="body-large">
            I'm a Full Stack Software Engineer focused on building maintainable systems, automating engineering workflows and designing software that scales.
          </Typography>
          <Typography variant="body-large">
            My experience spans frontend, backend and DevOps, with a particular interest in developer experience, enterprise platforms and AI-assisted software development.
          </Typography>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Link href="/experience" passHref legacyBehavior>
            <Button variant="primary" size="lg" as="a">
              View Experience
            </Button>
          </Link>
          <Button variant="secondary" size="lg">
            Read Case Studies
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
