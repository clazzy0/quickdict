import "./globals.css"
import React from "react"
import NavBar from "@/components/nav/NavBar"
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { fontHeading, inter } from "@/assets/fonts/fonts"

export const metadata: Metadata = {
  title: {
    template: "%s Definition | QuickDict",
    default: "QuickDict",
  },
  description:
    "The fastest way to get a definition for paper book readers. Shorten the time between search, definition, and reading.",
  metadataBase: new URL("https://quickdict.io"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("antialiased", fontHeading.variable, inter.variable)}>
        <div className="flex flex-col min-h-screen mx-auto lg:max-w-[1400px] px-8">
          <SpeedInsights />

          <NavBar />
          <main className="flex flex-grow w-full">{children}</main>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  )
}
