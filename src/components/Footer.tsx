import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex text-primary h-[70px] md:px-12 px-6 text-sm">
      <div className="mr-3 mt-8">
        Built by{" "}
        <Link
          href="https://www.instagram.com/clazzygg/"
          className="font-medium underline"
          target="_blank"
        >
          clazzy
        </Link>
        , and a{" "}
        <Link
          href="https://blogbase.com"
          className="underline font-medium"
          target="_blank"
        >
          blog
        </Link>{" "}
        on the idea.
      </div>
    </footer>
  )
}
