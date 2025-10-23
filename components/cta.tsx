"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { COPY } from "@/lib/copy"
import { useState } from "react"
import { PilotModal } from "@/components/pilot-modal"

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="cta" className="py-24 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 p-8 lg:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-50" />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  {COPY.cta.title}
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 group"
                  >
                    {COPY.cta.primaryCTA}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-8 border-border hover:bg-secondary bg-transparent"
                  >
                    {COPY.cta.secondaryCTA}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PilotModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
