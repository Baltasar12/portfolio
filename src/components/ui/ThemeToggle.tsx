"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render an invisible placeholder with same dimensions to avoid layout shift
    return <div className="w-5 h-5" aria-hidden="true" />
  }

  const isDark = resolvedTheme === "dark"

  const variants = {
    initial: (isDarkTheme: boolean) => ({
      opacity: 0,
      rotate: shouldReduceMotion ? 0 : isDarkTheme ? -45 : 45,
      scale: shouldReduceMotion ? 1 : 0.8,
    }),
    animate: {
      opacity: 1,
      rotate: 0,
      scale: 1,
    },
    exit: (isDarkTheme: boolean) => ({
      opacity: 0,
      rotate: shouldReduceMotion ? 0 : isDarkTheme ? 45 : -45,
      scale: shouldReduceMotion ? 1 : 0.8,
    }),
  }

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark"
    const doc = document as any

    if (!shouldReduceMotion && typeof doc !== "undefined" && doc.startViewTransition) {
      doc.startViewTransition(() => {
        setTheme(nextTheme)
      })
    } else {
      setTheme(nextTheme)
    }
  }

  return (
    <motion.button
      onClick={handleToggle}
      className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] flex items-center justify-center w-5 h-5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
      style={{ originX: 0.5, originY: 0.5 }}
      aria-label="Toggle theme"
      whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 10 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence mode="wait" initial={false} custom={isDark}>
        <motion.div
          key={isDark ? "dark" : "light"}
          custom={isDark}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
