import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.protocol === "http:") {
    const httpsUrl = request.nextUrl.clone();
    httpsUrl.protocol = "https:";
    return NextResponse.redirect(httpsUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
