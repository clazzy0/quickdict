import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Github, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center text-center px-4 w-full">
      <h1
        style={{ lineHeight: 1.25 }}
        className={`max-w-4xl text-balance tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-9`}
      >
        The most optimized voice activated <br />
        dictionary for paper book readers.
      </h1>

      <div className="flex flex-row sm:gap-5 tracking-tight">
        <Link href="/session">
          <Button size="xl">
            <Play size={16} className="mr-3" />
            Try Now
          </Button>
        </Link>
        <Link href="https://github.com/clazzy0/quickdict" target="_blank">
          <Button size="xl" variant="outline">
            <Code2 size={20} className="mr-3" />
            GitHub
          </Button>
        </Link>
      </div>
    </div>
  )
}
