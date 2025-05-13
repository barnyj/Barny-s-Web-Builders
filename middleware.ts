import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Only skip in non-production (i.e. local/dev) runs
  const isDev = process.env.NODE_ENV !== "production"
  if (isDev) {
    console.log("[middleware] skipping redirect (dev mode)")
    return NextResponse.next()
  }

  // In production, enforce HTTPS + www
  const host  = request.nextUrl.hostname
  const proto = request.headers.get("x-forwarded-proto") || ""

  console.log(`[middleware] host=${host} proto=${proto}`)

  const wantsHttps = proto === "https"
  const wantsWww   = host === "www.barnyswebbuilders.site"

  if (!wantsHttps || !wantsWww) {
    console.log(
      `[middleware] redirecting to https://www.barnyswebbuilders.site${request.nextUrl.pathname}`
    )
    const url = request.nextUrl.clone()
    url.protocol = "https:"
    url.host     = "www.barnyswebbuilders.site"
    return NextResponse.redirect(url, 301)
  }

  console.log("[middleware] passed, serving page")
  return NextResponse.next()
}

export const config = { matcher: "/:path*" }
