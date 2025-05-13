// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { hostname } = request.nextUrl;
  // Cloudflare/Render terminate TLS in front, so we trust x-forwarded-proto
  const proto = request.headers.get("x-forwarded-proto") || "";

  // 1) Skip middleware in local dev
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return NextResponse.next();
  }

  // 2) If not HTTPS (via header) or not on the www host, redirect
  const wantsHttps = proto === "https";
  const wantsWww   = hostname === "www.barnyswebbuilders.site";
  if (!wantsHttps || !wantsWww) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host     = "www.barnyswebbuilders.site";
    return NextResponse.redirect(url, 301);
  }

  // 3) Otherwise, continue
  return NextResponse.next();
}

export const config = { matcher: "/:path*" };
