import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Only run in production
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next()
  }

  const host = request.nextUrl.hostname
  const proto = request.headers.get("x-forwarded-proto") || ""
  const isHttps = proto === "https"
  const isWww   = host === "www.barnyswebbuilders.site"

  // If not HTTPS or not www, redirect in one hop
  if (!isHttps || !isWww) {
    // preserve path & query
    const pathAndQuery = request.nextUrl.pathname + request.nextUrl.search
    const destination = `https://www.barnyswebbuilders.site${pathAndQuery}`
    return NextResponse.redirect(destination, 301)
  }

  // Otherwise serve the page
  return NextResponse.next()
}

export const config = { matcher: "/:path*" }
