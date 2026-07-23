import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonVariantsProps {
  variant?: "primary" | "secondary" | "link"
  size?: "default" | "sm" | "lg"
}

export function buttonVariants({ variant = "primary", size = "default", className }: ButtonVariantsProps & { className?: string } = {}) {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-accent)] border border-transparent",
    secondary:
      "bg-transparent text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:bg-[var(--color-surface)]",
    link: "bg-transparent text-[var(--color-primary)] underline-offset-4 hover:underline !p-0 !h-auto font-medium",
  }

  const sizes = {
    default: "h-12 px-6 py-3",
    sm: "h-9 px-4 py-2 text-sm",
    lg: "h-14 px-8 py-4 text-lg",
  }

  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] text-[var(--text-body)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    variant !== "link" && sizes[size],
    className
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantsProps {
  as?: React.ElementType
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, as: Component = "button", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...(props as any)}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
