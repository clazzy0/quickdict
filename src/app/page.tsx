import "./globals.css"
import Link from "next/link"
import { auth } from "@/lib/auth"
import WarnSignInButton from "@/components/WarnSignInButton"
import { Code2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex flex-col justify-center items-center max-w-[64rem] mx-auto w-full text-center">
      <p className="rounded-2xl bg-muted px-4 py-1.5 text-xs xs:text-sm mb-4">
        We are currently in early beta
      </p>

      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary pb-4">
        The optimal <br className="xs:hidden xxs:block" />
        dictionary <br />
        for paper book <br className="xxs:hidden" />
        enthusiasts.
      </h1>

      <p className="hidden sm:block text-gray-500 sm:text-md sm:leading-6 md:text-xl md:leading-8 pb-4 text-balance">
        This voice activated dictionary was built as an alternative to word
        search. <br />
        Made for students who read large amounts of difficult text.
      </p>
      <p className="text-balance xs:block sm:hidden text-gray-500 text-md pb-4">
        This voice activated dictionary <br className="xs:hidden xxs:block" />
        was made for students who read <br className="xs:hidden xxs:block" />
        large amounts of difficult text.
      </p>

      <div className="flex flex-row gap-3 sm:gap-5 tracking-tight mt-1">
        {!session?.user ? (
          <WarnSignInButton />
        ) : (
          <Link href="/session">
            <Button size="xl">
              <Play size={16} className="mr-3" />
              Try Now
            </Button>
          </Link>
        )}
        <Link
          href="https://github.com/clazzy0/quickdict"
          target="_blank"
          className="font-sans"
        >
          <Button size="xl" variant="outline">
            <Code2 size={20} className="mr-3" />
            GitHub
          </Button>
        </Link>
      </div>
    </div>
  )
}
