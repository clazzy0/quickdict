import localFont from "next/font/local"
import { Inter } from "next/font/google"

export const fontHeading = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})
