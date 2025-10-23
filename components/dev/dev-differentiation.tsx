"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { DEV_CONTENT } from "@/lib/dev-content"

export function DevDifferentiation() {
  const { differentiation } = DEV_CONTENT

  return (
    <section id="differentiation" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">{differentiation.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiation.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
