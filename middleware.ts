// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const host  = request.nextUrl.hostname
  const proto = request.headers.get("x-forwarded-proto") || ""

  // Skip in local dev
  if (host === "localhost" || host === "127.0.0.1") {
    console.log("[middleware] skipping redirect (local)")
    return NextResponse.next()
  }

  const wantsHttps = proto === "https"
  const wantsWww   = host === "www.barnyswebbuilders.site"

  if (!wantsHttps || !wantsWww) {
    console.log(
      `[middleware] redirecting to https://www.barnyswebbuilders.site${request.nextUrl.pathname}`)
    const url = request.nextUrl.clone()
    url.protocol = "https:"
    url.host     = "www.barnyswebbuilders.site"
    return NextResponse.redirect(url, 301)
  }

  console.log("[middleware] passed, serving page")
  return NextResponse.next()
}

export const config = { matcher: "/:path*" }
