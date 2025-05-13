// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Pull the incoming Host header and the Cloudflare-set proto header
  const host = request.headers.get("host") || ""
  const proto = request.headers.get("x-forwarded-proto") || ""

  // If it’s not HTTPS or not the www host, redirect in one step
  if (proto !== "https" || host !== "www.barnyswebbuilders.site") {
    const url = new URL(request.url)
    url.protocol = "https"
    url.host = "www.barnyswebbuilders.site"
    return NextResponse.redirect(url, 301)
  }

  // Otherwise just serve the page
  return NextResponse.next()
}

export const config = { matcher: "/:path*" }
