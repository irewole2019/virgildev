"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { DEV_CONTENT } from "@/lib/dev-content"

export function DevFeatures() {
  const { featuresSection, features } = DEV_CONTENT

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{featuresSection.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{featuresSection.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
