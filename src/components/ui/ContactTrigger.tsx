"use client"
import * as React from "react"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function ContactTrigger() {
  return (
    <Button variant="primary" size="lg" onClick={() => {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('open-contact'))
      }
    }}>
      Contact Me <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
