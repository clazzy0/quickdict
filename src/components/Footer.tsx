import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex text-primary xs:text-sm text-xs font-sans mb-6">
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
        </Link>
        .
      </div>
    </footer>
  )
}
