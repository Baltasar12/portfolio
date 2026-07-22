import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  variant?: "editorial" | "modular"
}

export function Section({
  className,
  as: Component = "section",
  variant = "modular",
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "w-full px-6 md:px-12 py-16 md:py-24",
        variant === "editorial" && "max-w-[760px] mx-auto",
        variant === "modular" && "max-w-[1280px] mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
