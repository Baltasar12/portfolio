import * as React from "react"
import { cn } from "@/lib/utils"

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 
    | "display-xxl"
    | "display-xl" 
    | "display-l" 
    | "heading" 
    | "body-large" 
    | "body" 
    | "small" 
    | "mono"
  as?: React.ElementType
}

export function Typography({
  className,
  variant = "body",
  as,
  children,
  ...props
}: TypographyProps) {
  const Component = as || defaultElement(variant)
  
  const variantStyles = {
    "display-xxl": "text-[var(--text-display-xxl)] leading-[var(--text-display-xxl--line-height)] tracking-tight font-medium",
    "display-xl": "text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-tight font-medium",
    "display-l": "text-[var(--text-display-l)] leading-[var(--text-display-l--line-height)] tracking-tight font-medium",
    "heading": "text-[var(--text-heading)] leading-[var(--text-heading--line-height)] tracking-tight font-medium",
    "body-large": "text-[var(--text-body-large)] leading-[var(--text-body-large--line-height)]",
    "body": "text-[var(--text-body)] leading-[var(--text-body--line-height)]",
    "small": "text-[var(--text-small)] leading-[var(--text-small--line-height)] text-[var(--color-secondary)]",
    "mono": "font-mono text-[var(--text-mono)] leading-[var(--text-mono--line-height)] text-[var(--color-secondary)] uppercase tracking-wider",
  }

  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}

function defaultElement(variant: string): React.ElementType {
  switch (variant) {
    case "display-xxl":
      return "h1"
    case "display-xl":
      return "h2"
    case "display-l":
    case "heading":
      return "h3"
    case "body-large":
    case "body":
    case "small":
      return "p"
    case "mono":
      return "span"
    default:
      return "p"
  }
}
