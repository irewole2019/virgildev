"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { DEV_CONTENT } from "@/lib/dev-content"

export function DevDemo() {
  const { demo } = DEV_CONTENT

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">{demo.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
            <div className="aspect-video bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto animate-pulse">
                  <div className="h-10 w-10 rounded-full bg-accent" />
                </div>
                <p className="text-sm text-muted-foreground">Demo video placeholder</p>
                <p className="text-xs text-muted-foreground/60">TODO: Add live demo or GIF</p>
              </div>
            </div>
          </Card>
          <p className="text-center text-muted-foreground mt-6">{demo.caption}</p>
        </motion.div>
      </div>
    </section>
  )
}
