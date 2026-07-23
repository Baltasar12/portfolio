"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Typography } from "@/components/ui/Typography"
import { Card, CardContent } from "@/components/ui/Card"
import { Mail, FileText } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Contact() {
  return (
    <Section variant="editorial" id="contact" className="border-t border-[var(--color-border)] pb-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col space-y-12"
      >
        <div className="space-y-4">
          <Typography variant="display-l" as="h2">
            Let's build something resilient.
          </Typography>
          <Typography variant="body-large" className="text-[var(--color-secondary)] max-w-[500px]">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="mailto:baltasarbarbaglia@gmail.com" className="group">
            <Card className="h-full border-transparent bg-[var(--color-surface)] group-hover:bg-[var(--color-background)] group-hover:border-[var(--color-border)] transition-all">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-[var(--color-background)] rounded-[var(--radius-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="heading" className="text-base">Email</Typography>
                  <Typography variant="small" className="text-[var(--color-secondary)]">baltasarbarbaglia@gmail.com</Typography>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="https://linkedin.com/in/baltasarbarba/" target="_blank" rel="noopener noreferrer" className="group">
            <Card className="h-full border-transparent bg-[var(--color-surface)] group-hover:bg-[var(--color-background)] group-hover:border-[var(--color-border)] transition-all">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-[var(--color-background)] rounded-[var(--radius-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="heading" className="text-base">LinkedIn</Typography>
                  <Typography variant="small" className="text-[var(--color-secondary)]">Professional Profile</Typography>
                </div>
              </CardContent>
            </Card>
          </a>
          
          <a href="https://github.com/Baltasar12/" target="_blank" rel="noopener noreferrer" className="group">
            <Card className="h-full border-transparent bg-[var(--color-surface)] group-hover:bg-[var(--color-background)] group-hover:border-[var(--color-border)] transition-all">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-[var(--color-background)] rounded-[var(--radius-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  <FaGithub className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="heading" className="text-base">GitHub</Typography>
                  <Typography variant="small" className="text-[var(--color-secondary)]">github.com/Baltasar12</Typography>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="/resume/Baltasar_Barbaglia_FullStack_Developer.pdf" download className="group">
            <Card className="h-full border-transparent bg-[var(--color-surface)] group-hover:bg-[var(--color-background)] group-hover:border-[var(--color-border)] transition-all">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-[var(--color-background)] rounded-[var(--radius-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="heading" className="text-base">Resume</Typography>
                  <Typography variant="small" className="text-[var(--color-secondary)]">Download PDF</Typography>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
