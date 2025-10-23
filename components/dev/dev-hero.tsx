"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Zap, Check, Users } from "lucide-react"
import { DEV_CONTENT } from "@/lib/dev-content"
import { DevCodeAnimation } from "./dev-code-animation"

export function DevHero() {
  const { hero } = DEV_CONTENT

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">{hero.headline}</h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">{hero.subheadline}</p>
            </div>

            <div className="flex flex-wrap gap-8 py-4">
              {hero.socialMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Zap className="mr-2 h-5 w-5" />
                {hero.primaryCTA}
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent">
                <Users className="mr-2 h-5 w-5" />
                {hero.communityCTA}
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {hero.trustBadges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  <Check className="mr-2 h-4 w-4" />
                  {badge}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DevCodeAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
