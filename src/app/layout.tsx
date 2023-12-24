import "./globals.css"
import React from "react"
import NavBar from "@/components/NavBar/NavBar"
import Footer from "@/components/Footer/Footer"
import type { Metadata } from "next"

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
      <body className="flex flex-col min-h-screen antialiased">
        <NavBar />
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
