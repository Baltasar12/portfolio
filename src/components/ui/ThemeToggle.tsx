"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render an invisible placeholder with same dimensions to avoid layout shift
    return <div className="w-5 h-5" aria-hidden="true" />
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 flex items-center justify-center w-5 h-5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <Sun className="absolute w-4 h-4 transition-all duration-200 scale-100 opacity-100 rotate-0 dark:-rotate-90 dark:scale-0 dark:opacity-0" />
        <Moon className="absolute w-4 h-4 transition-all duration-200 scale-0 opacity-0 rotate-90 dark:rotate-0 dark:scale-100 dark:opacity-100" />
      </div>
    </button>
  )
}
