"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { DEV_CONTENT } from "@/lib/dev-content"

export function DevStory() {
  const { story } = DEV_CONTENT

  return (
    <section id="story" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-12 bg-card/50 backdrop-blur border-border/50">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6 text-center">{story.title}</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed text-center">
              {story.content}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
