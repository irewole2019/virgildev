"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MessageSquare, GitBranch, FileText } from "lucide-react"
import { DEV_CONTENT } from "@/lib/dev-content"

const iconMap = {
  MessageSquare,
  GitBranch,
  FileText,
}

export function DevSolution() {
  const { solution } = DEV_CONTENT

  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">{solution.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solution.cards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-colors">
                  <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
