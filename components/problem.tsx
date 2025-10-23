"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import { COPY } from "@/lib/copy"

export function Problem() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            {COPY.problem.title}
          </motion.h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {COPY.problem.bullets.map((bullet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 mb-6"
            >
              <div className="flex-shrink-0 rounded-full bg-destructive/10 p-2 mt-1">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{bullet}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
