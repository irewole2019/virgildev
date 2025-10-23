"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { CodeAnimation } from "@/components/code-animation"
import { COPY } from "@/lib/copy"
import { useState } from "react"
import { PilotModal } from "@/components/pilot-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const badges = COPY.hero.badge.split(" • ")

  return (
    <>
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex flex-wrap items-center justify-center gap-3"
            >
              {badges.map((badge, index) => (
                <Badge key={index} variant="outline" className="px-4 py-1.5 text-sm border-accent/30 bg-accent/10">
                  {badge}
                </Badge>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
            >
              {COPY.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              {COPY.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-8 mb-10"
            >
              {COPY.hero.speedMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {COPY.hero.primaryCTA}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-border hover:bg-secondary bg-transparent"
              >
                {COPY.hero.secondaryCTA}
              </Button>
            </motion.div>

            {/* Animated code visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CodeAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      <PilotModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
