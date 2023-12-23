"use client"

import Image from "next/image"
import { ProfileIconProps } from "@/app/types/types"

export default function ProfileIcon({ name, email, image }: ProfileIconProps) {
  return (
    <button>
      {/* <Image
        className="rounded-full active:scale-90"
        src={image}
        alt="User's profile image"
        width={45}
        height={45}
        onDragStart={(e) => e.preventDefault()}
      /> */}
      DADDY CHILL
    </button>
  )
}
