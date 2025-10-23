"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { DEV_CONTENT } from "@/lib/dev-content"

export function DevHowItWorks() {
  const { howItWorks } = DEV_CONTENT

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">{howItWorks.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{howItWorks.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-card/50 backdrop-blur border-border/50 relative">
                <div className="absolute -top-6 left-8">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
