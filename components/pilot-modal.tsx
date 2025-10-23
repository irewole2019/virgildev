"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PilotModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PilotModal({ isOpen, onClose }: PilotModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    repoHost: "",
    timeline: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setFormData({ name: "", email: "", company: "", repoHost: "", timeline: "" })
        }, 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl p-8 mx-4">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Reserve Your Pilot Slot</h2>
                    <button
                      onClick={onClose}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Acme Corp"
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="repoHost">Repository Host</Label>
                      <Input
                        id="repoHost"
                        name="repoHost"
                        value={formData.repoHost}
                        onChange={handleChange}
                        placeholder="GitHub, GitLab, Bitbucket, etc."
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="timeline">Desired Timeline</Label>
                      <Input
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="ASAP, Q2 2025, etc."
                        className="mt-1.5"
                      />
                    </div>

                    <Button type="submit" disabled={isLoading} className="w-full mt-6" size="lg">
                      {isLoading ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Request Received!</h3>
                  <p className="text-muted-foreground">We'll be in touch within 24 hours to schedule your pilot.</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
