"use client"

import "@/app/globals.css"
import Image from "next/image"
import defaultUserIcon from "/public/default-user-icon.svg"
import { UserInfoProps } from "@/types/types"
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

export default function ProfileIconAndDropdown(userInfo: UserInfoProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="noSelect flex justify-center items-center border-primary rounded-full active:scale-95">
          <Image
            className="rounded-full xs:h-[40px] xs:w-[40px] h-[32px] w-[32px]"
            src={userInfo.image || defaultUserIcon}
            alt="User's profile image"
            width={40}
            height={40}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px]">
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
          onClick={() => {
            signOut({
              callbackUrl: `${window.location.origin}`,
            })
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
