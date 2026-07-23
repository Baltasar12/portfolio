"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Typography } from "@/components/ui/Typography"
import { Card, CardContent } from "@/components/ui/Card"
import { Mail, FileText, Copy, Check } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      e.preventDefault();
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("baltasarbarbaglia@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <a href="mailto:baltasarbarbaglia@gmail.com" className="group relative block" onClick={handleEmailClick}>
            <Card className="h-full border-transparent bg-[var(--color-surface)] transition duration-[180ms] ease-out group-hover:border-[var(--color-accent)]/30 group-hover:-translate-y-[2px] group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative">
              <button 
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-md text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] z-10 cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? <Check className="h-4 w-4 text-[var(--color-accent)]" /> : <Copy className="h-4 w-4" />}
              </button>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-[var(--color-background)] rounded-[var(--radius-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-[180ms] ease-out">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="heading" className="text-base group-hover:text-[var(--color-accent)] transition-colors duration-[180ms] ease-out">Email</Typography>
                  <Typography variant="small" className="text-[var(--color-secondary)] select-text">baltasarbarbaglia@gmail.com</Typography>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="https://linkedin.com/in/baltasarbarba/" target="_blank" rel="noopener noreferrer" className="group">
            <Card className="h-full border-transparent bg-[var(--color-surface)] transition duration-[180ms] ease-out group-hover:border-[var(--color-accent)]/30 group-hover:-translate-y-[2px] group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-[var(--color-background)] rounded-[var(--radius-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-[180ms] ease-out">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="heading" className="text-base group-hover:text-[var(--color-accent)] transition-colors duration-[180ms] ease-out">LinkedIn</Typography>
                  <Typography variant="small" className="text-[var(--color-secondary)]">Professional Profile</Typography>
                </div>
              </CardContent>
            </Card>
          </a>
          
          <a href="https://github.com/Baltasar12/" target="_blank" rel="noopener noreferrer" className="group">
            <Card className="h-full border-transparent bg-[var(--color-surface)] transition duration-[180ms] ease-out group-hover:border-[var(--color-accent)]/30 group-hover:-translate-y-[2px] group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-[var(--color-background)] rounded-[var(--radius-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-[180ms] ease-out">
                  <FaGithub className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="heading" className="text-base group-hover:text-[var(--color-accent)] transition-colors duration-[180ms] ease-out">GitHub</Typography>
                  <Typography variant="small" className="text-[var(--color-secondary)]">github.com/Baltasar12</Typography>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="/resume/Baltasar_Barbaglia_FullStack_Developer.pdf" download className="group">
            <Card className="h-full border-transparent bg-[var(--color-surface)] transition duration-[180ms] ease-out group-hover:border-[var(--color-accent)]/30 group-hover:-translate-y-[2px] group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-[var(--color-background)] rounded-[var(--radius-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-[180ms] ease-out">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="heading" className="text-base group-hover:text-[var(--color-accent)] transition-colors duration-[180ms] ease-out">Resume</Typography>
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
