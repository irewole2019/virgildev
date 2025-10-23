"use client"

import { motion } from "framer-motion"
import { Brain, FileText, GitBranch, Lightbulb, Shield } from "lucide-react"
import { COPY } from "@/lib/copy"

const iconMap = {
  0: Brain,
  1: FileText,
  2: GitBranch,
  3: Lightbulb,
  4: Shield,
}

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            {COPY.solution.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {COPY.solution.features.map((feature, index) => {
            const Icon = iconMap[index as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-xl border border-border bg-card p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="rounded-lg bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-colors w-fit mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
