"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { DEV_CONTENT } from "@/lib/dev-content"

export function DevExample() {
  const { example } = DEV_CONTENT

  return (
    <section id="example" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">{example.title}</h2>
          <p className="text-lg text-muted-foreground">{example.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  Repository
                </Badge>
                <p className="text-xl font-mono text-accent">{example.repository}</p>
              </div>

              <div>
                <Badge variant="secondary" className="mb-3">
                  Question
                </Badge>
                <p className="text-lg">{example.question}</p>
              </div>

              <div className="flex items-center justify-center py-4">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>

              <div>
                <Badge variant="secondary" className="mb-3">
                  LegacyIQ finds
                </Badge>
                <ul className="space-y-2">
                  {example.finds.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center py-4">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>

              <div>
                <Badge variant="secondary" className="mb-3">
                  Generates
                </Badge>
                <p className="text-muted-foreground">{example.generates}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
