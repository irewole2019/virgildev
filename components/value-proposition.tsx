"use client"

import { motion } from "framer-motion"
import { Eye, Shield, Target } from "lucide-react"
import { COPY } from "@/lib/copy"

const iconMap = {
  0: Eye,
  1: Target,
  2: Shield,
}

export function ValueProposition() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {COPY.value.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {COPY.value.pillars.map((pillar, index) => {
              const Icon = iconMap[index as keyof typeof iconMap]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex rounded-xl bg-accent/10 p-4 mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
