import Image from "next/image"
import Link from "next/link"
import quickLogo from "@/public/quickdict-logo.svg"
import { poppins } from "@/app/ui/fonts"

export default function Logo() {
  return (
    <Link className={`${poppins.className} flex items-center`} href="/">
      <Image
        src={quickLogo}
        alt={"QuickDict's Logo"}
        width={40}
        height={40}
        className="ml-[-8px]"
      />
      <span className="ml-0.5 font-bold text-2xl">QUICKDICT</span>
    </Link>
  )
}
