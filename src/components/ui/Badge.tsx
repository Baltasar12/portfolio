import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "status"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border border-[var(--color-border)] text-[var(--color-secondary)] bg-black/5 dark:bg-[var(--color-surface)]",
    status: "border border-[var(--color-accent)]/30 text-[var(--color-accent)] bg-[var(--color-accent)]/10",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[var(--radius-sm)] px-2.5 py-0.5 font-mono text-[11px] leading-[1.5] uppercase tracking-wider font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
