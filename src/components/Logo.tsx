"use client"

import "@/app/globals.css"
import Image from "next/image"
import Link from "next/link"
import quickLogo from "/public/quickdict-logo.svg"
import { poppins } from "./fonts"

export default function Logo() {
  return (
    <Link
      className={`${poppins.className} noSelect flex items-center`}
      href="/"
    >
      <Image
        src={quickLogo}
        alt={"QuickDict's Logo"}
        width={40}
        height={40}
        className="ml-[-8px]"
        onDragStart={(e) => e.preventDefault()}
      />
      <span className="ml-0.5 font-bold text-2xl">QUICKDICT</span>
    </Link>
  )
}
