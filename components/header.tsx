"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isCompanyPage = pathname === "/companies"

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-accent transition-transform group-hover:scale-105" />
              <span className="text-xl font-bold text-foreground">VirgilDev</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className={`text-sm transition-colors ${
                  !isCompanyPage ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                For Developers
              </Link>
              <Link
                href="/companies"
                className={`text-sm transition-colors ${
                  isCompanyPage ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                For Companies
              </Link>
            </nav>
          </div>
          {isCompanyPage && (
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                const element = document.getElementById("cta")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Book a Demo
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  )
}
