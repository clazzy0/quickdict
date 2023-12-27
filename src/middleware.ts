export { default } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const cookiesOne = request.cookies.get("next-auth.session-token")
  const cookiesTwo = request.cookies.get("next-auth.crsf-token")

  if (cookiesOne || cookiesTwo) {
    return NextResponse.next()
  } else return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: ["/session", "/profile", "/usage"],
}
