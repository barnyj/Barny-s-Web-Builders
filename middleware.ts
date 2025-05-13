// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { protocol, host, pathname, search } = request.nextUrl;
  // if not HTTPS or not www:
  if (protocol !== "https:" || host !== "www.barnyswebbuilders.site") {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = "www.barnyswebbuilders.site";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: "/:path*" };
