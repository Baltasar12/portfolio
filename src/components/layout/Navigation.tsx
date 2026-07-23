"use client"
import * as React from "react"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"
import { Typography } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const SHOW_ARTICLES = false;

export function Navigation() {
  const { scrollY } = useScroll()
  
  // Fade in background and border when scrolled
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.8])
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1])

  const backgroundColor = useMotionTemplate`rgba(var(--background-rgb), ${bgOpacity})`
  const borderBottom = useMotionTemplate`1px solid rgba(var(--border-rgb), ${borderOpacity})`

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 flex items-center px-6 md:px-12 backdrop-blur-md transition-colors duration-200"
      style={{
        backgroundColor,
        borderBottom,
      }}
    >
      <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto">
        <Typography variant="mono" as="div" className="text-sm font-semibold tracking-wide text-primary">
          <a href="/">Engineer.</a>
        </Typography>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#experience" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Experience</a>
          <a href="#case-studies" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Case Studies</a>
          <a href="#approach" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Approach</a>
          {SHOW_ARTICLES && (
            <a href="#articles" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Articles</a>
          )}
        </nav>

        <div className="flex items-center space-x-5">
          <a href="/resume/Baltasar_Barbaglia_FullStack_Developer.pdf" download>
            <Button variant="link" className="hidden sm:inline-flex text-sm text-secondary hover:text-primary">
              Resume
            </Button>
          </a>
          <ThemeToggle />
          <Button variant="secondary" size="sm" onClick={() => window.dispatchEvent(new Event('open-contact'))}>
            Contact
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
