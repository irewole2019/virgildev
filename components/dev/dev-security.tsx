"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Shield, Check } from "lucide-react"
import { DEV_CONTENT } from "@/lib/dev-content"

export function DevSecurity() {
  const { security } = DEV_CONTENT

  return (
    <section id="security" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-accent/20 mb-6">
            <Shield className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">{security.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 max-w-3xl mx-auto bg-card/50 backdrop-blur border-border/50">
            <ul className="space-y-4">
              {security.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border/50">
              <pre className="text-xs font-mono text-muted-foreground overflow-x-auto">
                <code>{`{
  "privacy": "local-first",
  "network": "disabled",
  "telemetry": "opt-in-only"
}`}</code>
              </pre>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
