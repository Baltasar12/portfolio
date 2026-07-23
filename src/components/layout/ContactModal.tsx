"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Typography } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import { X, Send, FileText } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function ContactModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact', handleOpen);
    return () => window.removeEventListener('open-contact', handleOpen);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct mailto link
    const mailtoSubject = encodeURIComponent(subject || `New message from ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:baltasarbarbaglia@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsOpen(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="relative w-full max-w-[560px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-border)] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-2 mb-6">
              <Typography variant="heading" as="h2" className="text-2xl">
                Contact Me
              </Typography>
              <Typography variant="body" className="text-[var(--color-secondary)]">
                Have a question or want to work together? Leave a message.
              </Typography>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto pr-2 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-[var(--color-primary)]">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--color-primary)]">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-[var(--color-primary)]">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-[var(--color-primary)]">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full cursor-pointer">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center justify-center space-x-6">
              <a href="https://linkedin.com/in/baltasarbarba/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center space-x-2 text-sm font-medium group cursor-pointer">
                <FaLinkedin className="h-4 w-4 group-hover:text-[var(--color-accent)] transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Baltasar12/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center space-x-2 text-sm font-medium group cursor-pointer">
                <FaGithub className="h-4 w-4 group-hover:text-[var(--color-accent)] transition-colors" />
                <span>GitHub</span>
              </a>
              <a href="/resume/Baltasar_Barbaglia_FullStack_Developer.pdf" download className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center space-x-2 text-sm font-medium group cursor-pointer">
                <FileText className="h-4 w-4 group-hover:text-[var(--color-accent)] transition-colors" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
