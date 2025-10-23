"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { COPY } from "@/lib/copy"

export function CaseStudy() {
  return (
    <section id="case-study" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {COPY.caseStudy.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-8 right-8 opacity-5">
              <Quote className="h-32 w-32" />
            </div>

            <div className="relative">
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{COPY.caseStudy.quote}"
              </blockquote>

              <div className="text-muted-foreground mb-8">
                <div className="font-semibold text-foreground">— {COPY.caseStudy.author}</div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
                {COPY.caseStudy.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
