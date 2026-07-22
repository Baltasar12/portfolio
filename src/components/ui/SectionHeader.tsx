import * as React from "react"
import { Typography } from "@/components/ui/Typography"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

export function SectionHeader({ title, description, className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-4 mb-12", className)} {...props}>
      <Typography variant="display-xl" as="h2">
        {title}
      </Typography>
      {description && (
        <Typography variant="body-large" className="max-w-[600px] text-[var(--color-secondary)]">
          {description}
        </Typography>
      )}
    </div>
  )
}
