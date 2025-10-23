"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { COPY } from "@/lib/copy"

export function Differentiation() {
  const { differentiation } = COPY

  return (
    <section id="differentiation" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            {differentiation.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {differentiation.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentiation.comparison.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: columnIndex * 0.2 }}
              className={`rounded-xl border p-8 ${
                columnIndex === 1 ? "border-accent bg-accent/5 shadow-lg shadow-accent/10" : "border-border bg-card"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">{column.category}</h3>
              <ul className="space-y-4">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    {columnIndex === 1 ? (
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                    <span className={columnIndex === 1 ? "text-foreground" : "text-muted-foreground"}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
