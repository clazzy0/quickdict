export { default } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // console.log("blocked")
  // return NextResponse.redirect(new URL("/no", request.url))
}

export const config = {
  matcher: ["/session", "/profile", "/usage"],
}
