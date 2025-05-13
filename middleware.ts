// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // NO-OP: just let everything through
  return NextResponse.next()
}

export const config = { matcher: "/:path*" }
