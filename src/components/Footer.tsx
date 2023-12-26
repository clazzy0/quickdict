import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex items-center text-primary h-[65px] px-6 text-sm font-sans">
      <div className="mr-3">
        Built by{" "}
        <Link
          href="https://www.instagram.com/clazzygg/"
          className="font-medium underline"
          target="_blank"
        >
          clazzy
        </Link>
        . Project idea in this{" "}
        <Link
          href="https://blogbase.com"
          className="underline font-medium"
          target="_blank"
        >
          blog
        </Link>{" "}
        .
      </div>
    </footer>
  )
}
