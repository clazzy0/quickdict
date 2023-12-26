"use client"

import "@/app/globals.css"
import Image from "next/image"
import Link from "next/link"
import quickLogo from "/public/quickdict-logo.svg"

export default function Logo() {
  return (
    <Link className="noSelect flex items-center" href="/">
      <Image
        src={quickLogo}
        alt={"QuickDict's Logo"}
        width={24}
        height={24}
        onDragStart={(e) => e.preventDefault()}
      />
      <span className="ml-2 font-sans font-semibold text-lg text-[#1e2128] text-primary">
        QUICKDICT
      </span>
    </Link>
  )
}
