"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CodeAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
      {/* Code scanning visualization */}
      <div className="absolute inset-0 p-6">
        <div className="grid grid-cols-2 gap-6 h-full">
          {/* Left: Legacy Code */}
          <div className="relative rounded-lg border border-border/50 bg-secondary/30 p-4 overflow-hidden">
            <div className="text-xs text-muted-foreground mb-3 font-mono">legacy-system.java</div>
            <div className="space-y-2 font-mono text-xs">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.3 }}
                  animate={{
                    opacity: step === 0 ? [0.3, 1, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: step === 0 ? Number.POSITIVE_INFINITY : 0,
                  }}
                  className="h-3 bg-muted-foreground/20 rounded"
                  style={{ width: `${60 + Math.random() * 40}%` }}
                />
              ))}
            </div>

            {/* Scanning line effect */}
            {step === 0 && (
              <motion.div
                initial={{ top: 0 }}
                animate={{ top: "100%" }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute left-0 right-0 h-0.5 bg-accent shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              />
            )}
          </div>

          {/* Right: Architecture Map */}
          <div className="relative rounded-lg border border-border/50 bg-secondary/30 p-4">
            <div className="text-xs text-muted-foreground mb-3 font-mono">architecture-map.json</div>
            <div className="relative h-full">
              {/* Node graph visualization */}
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Connections */}
                {step >= 1 && (
                  <>
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                      x1="100"
                      y1="50"
                      x2="50"
                      y2="120"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-accent/50"
                    />
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      x1="100"
                      y1="50"
                      x2="150"
                      y2="120"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-accent/50"
                    />
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      x1="50"
                      y1="120"
                      x2="100"
                      y2="170"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-accent/50"
                    />
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      x1="150"
                      y1="120"
                      x2="100"
                      y2="170"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-accent/50"
                    />
                  </>
                )}

                {/* Nodes */}
                {[
                  { x: 100, y: 50, delay: 0 },
                  { x: 50, y: 120, delay: 0.1 },
                  { x: 150, y: 120, delay: 0.2 },
                  { x: 100, y: 170, delay: 0.3 },
                ].map((node, i) => (
                  <motion.g key={i}>
                    {step >= 1 && (
                      <>
                        <motion.circle
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: node.delay }}
                          cx={node.x}
                          cy={node.y}
                          r="12"
                          className="fill-accent/20 stroke-accent"
                          strokeWidth="2"
                        />
                        <motion.circle
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{
                            duration: 2,
                            delay: node.delay,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          cx={node.x}
                          cy={node.y}
                          r="12"
                          className="fill-none stroke-accent/30"
                          strokeWidth="1"
                        />
                      </>
                    )}
                  </motion.g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="h-2 w-2 rounded-full bg-accent"
          />
          <span className="text-xs text-muted-foreground font-mono">
            {step === 0 && "Scanning legacy codebase..."}
            {step === 1 && "Generating architecture map..."}
            {step === 2 && "Analysis complete"}
          </span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          {step === 0 && "33%"}
          {step === 1 && "66%"}
          {step === 2 && "100%"}
        </span>
      </div>
    </div>
  )
}
