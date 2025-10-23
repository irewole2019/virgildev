"use client"

import { motion } from "framer-motion"
import { FileQuestion, Network, AlertTriangle, Clock } from "lucide-react"
import { DEV_CONTENT } from "@/lib/dev-content"

const iconMap = {
  FileQuestion,
  Network,
  AlertTriangle,
  Clock,
}

export function DevProblem() {
  const { problem } = DEV_CONTENT

  return (
    <section id="problem" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">{problem.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problem.bullets.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50"
              >
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
