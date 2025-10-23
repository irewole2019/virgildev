import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VirgilDev — Modernization Intelligence Accelerator™",
  description:
    "Turn Your Legacy Codebase into a Modern, AI-Readable System — in 14 Days. VirgilDev™ reveals what's hidden inside your critical systems.",
  generator: "v0.app",
  openGraph: {
    title: "VirgilDev — Modernization Intelligence Accelerator™",
    description: "Turn Your Legacy Codebase into a Modern, AI-Readable System — in 14 Days.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VirgilDev — Modernization Intelligence Accelerator™",
    description: "Turn Your Legacy Codebase into a Modern, AI-Readable System — in 14 Days.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
