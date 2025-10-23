"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function DevCodeAnimation() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 font-mono">legacy-auth.ts</span>
            </div>
            <pre className="text-sm font-mono text-foreground/80">
              <code>{`function authenticate(user) {
  // Legacy auth logic
  const token = generateToken()
  return validateUser(token)
}`}</code>
            </pre>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6"
      >
        <Card className="p-6 bg-accent/10 backdrop-blur border-accent/50">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium">AI Analysis</span>
            </div>
            <p className="text-sm text-muted-foreground">
              This function handles user authentication using a legacy token-based system. It generates a token and
              validates the user. Consider migrating to JWT for better security.
            </p>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded bg-accent/20">legacy-auth.ts:2</span>
              <span className="px-2 py-1 rounded bg-accent/20">token-utils.ts:15</span>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6"
      >
        <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">Architecture Map</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="h-8 rounded bg-accent/20 flex items-center px-3 text-xs">auth-service</div>
                <div className="h-8 rounded bg-accent/20 flex items-center px-3 text-xs">token-utils</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-px w-8 bg-border" />
                <div className="h-px w-8 bg-border" />
              </div>
              <div className="flex-1">
                <div className="h-8 rounded bg-primary/20 flex items-center px-3 text-xs">user-db</div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
