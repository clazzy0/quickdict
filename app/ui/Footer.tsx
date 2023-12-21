import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-gray-200 text-gray-700 text-center py-4 h-[90px]">
      <div className="mb-3">
        <Link href="/about" className="mx-2">
          About
        </Link>
        <span className="mx-1">&middot;</span>
        <Link href="/blog" className="mx-2">
          Blog
        </Link>
        <span className="mx-1">&middot;</span>
        <Link href="/team" className="mx-2">
          Team
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()} QuickDict.io | All rights reserved.
      </p>
    </footer>
  );
}
