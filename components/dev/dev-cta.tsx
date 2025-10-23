"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Users } from "lucide-react"
import { DEV_CONTENT } from "@/lib/dev-content"

export function DevCTA() {
  const { finalCTA } = DEV_CONTENT

  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <Badge variant="secondary" className="px-4 py-2">
            {finalCTA.badge}
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance max-w-4xl mx-auto">
            {finalCTA.title}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Zap className="mr-2 h-5 w-5" />
              {finalCTA.primaryCTA}
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent">
              <Users className="mr-2 h-5 w-5" />
              {finalCTA.communityCTA}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
