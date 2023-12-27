export { default } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  //  Production it is: __Secure-next-auth.session-token
  const cookiesDevelopment = request.cookies.get("next-auth.session-token")
  const cookiesProduction = request.cookies.get(
    "__Secure-next-auth.session-token"
  )

  if (cookiesDevelopment || cookiesProduction) {
    return NextResponse.next()
  } else return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: ["/session", "/profile", "/usage"],
}
