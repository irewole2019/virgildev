"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { COPY } from "@/lib/copy"
import { useState } from "react"
import { PilotModal } from "@/components/pilot-modal"

export function Offer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {COPY.offer.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{COPY.offer.subtitle}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-accent/30 bg-card p-8 lg:p-12 shadow-xl shadow-accent/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
                  <div>
                    <Badge variant="outline" className="mb-3 border-accent/30 bg-accent/10">
                      PILOT PROGRAM
                    </Badge>
                    <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{COPY.offer.price}</div>
                    <div className="text-muted-foreground">{COPY.offer.priceNote}</div>
                  </div>
                  <Button
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 group lg:flex-shrink-0"
                  >
                    {COPY.offer.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">What's Included</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {COPY.offer.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 rounded-full bg-accent/10 p-1 mt-0.5">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
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
