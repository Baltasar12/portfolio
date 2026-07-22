import * as React from "react"
import { Typography } from "@/components/ui/Typography"

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] py-12 px-6 md:px-12 mt-24">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        
        <div className="flex flex-col space-y-1">
          <Typography variant="mono" className="text-xs">
            © {new Date().getFullYear()} — Baltasar Barbaglia.
          </Typography>
          <Typography variant="small" className="text-muted">
            Built with Next.js, Tailwind, and Framer Motion.
          </Typography>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">LinkedIn</a>
          <a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">GitHub</a>
          <a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Twitter</a>
        </div>

      </div>
    </footer>
  )
}
