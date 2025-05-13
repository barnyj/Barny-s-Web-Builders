// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const host  = request.nextUrl.hostname
  const proto = request.headers.get("x-forwarded-proto") || ""

  // Skip in local dev
  if (host === "localhost" || host === "127.0.0.1") {
    const res = NextResponse.next()
    res.headers.set("x-middleware-debug", "local")
    return res
  }

  const wantsHttps = proto === "https"
  const wantsWww   = host === "www.barnyswebbuilders.site"

  if (!wantsHttps || !wantsWww) {
    const url = request.nextUrl.clone()
    url.protocol = "https:"
    url.host     = "www.barnyswebbuilders.site"
    const res = NextResponse.redirect(url, 301)
    res.headers.set("x-middleware-debug", "redirected")
    return res
  }

  const res = NextResponse.next()
  res.headers.set("x-middleware-debug", "passed")
  return res
}

export const config = { matcher: "/:path*" }
