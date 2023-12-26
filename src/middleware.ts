export { default } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const session = request.cookies.get("next-auth.session-token")

  if (session?.value) {
    return NextResponse.next()
  } else return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: ["/session", "/profile", "/usage"],
}
