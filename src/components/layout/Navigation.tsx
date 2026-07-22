"use client"
import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Typography } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"

export function Navigation() {
  const { scrollY } = useScroll()
  
  // Fade in background and border when scrolled
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 1])
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1])

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 flex items-center px-6 md:px-12 backdrop-blur-md"
      style={{
        backgroundColor: `rgba(250, 249, 247, ${bgOpacity.get() * 0.8})`, // Warm white with opacity
        borderBottom: `1px solid rgba(229, 229, 229, ${borderOpacity.get()})`, // border color
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
          <a href="#articles" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Articles</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="link" className="hidden sm:inline-flex text-sm text-secondary hover:text-primary">
            Resume
          </Button>
          <Button variant="secondary" size="sm">
            Contact
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
