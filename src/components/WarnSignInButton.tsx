"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function WarnSignInButton() {
  return (
    <Button
      size="xl"
      onClick={() => {
        toast({
          title: "Please Log In to Try This Feature",
          description:
            "You can use Google, Github, or Email for authentication.",
        })
      }}
    >
      <Play size={16} className="mr-3" />
      Try Now
    </Button>
  )
}
