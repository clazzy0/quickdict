"use client"

import "@/app/globals.css"
import Image from "next/image"
import defaultUserIcon from "/public/default-user-icon.svg"
import { ProfileIconProps } from "@/types/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, BarChart2 } from "lucide-react"
import { signOut } from "next-auth/react"

export default function ProfileIconAndDropdown({ image }: ProfileIconProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="noSelect h-[45px] w-[45px] flex justify-center items-center border-2 border-[#27b1c1] rounded-full active:scale-95">
          <Image
            className="rounded-full"
            src={image || defaultUserIcon}
            alt="User's profile image"
            width={image ? 45 : 35}
            height={image ? 45 : 35}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] mx-3 md:mx-12 p-1">
        <DropdownMenuLabel className="text-md">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-md">
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-md">
          <BarChart2 className="mr-2 h-4 w-4" />
          Usage
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-md"
          onClick={() =>
            signOut({
              callbackUrl: `${window.location.origin}`,
            })
          }
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
