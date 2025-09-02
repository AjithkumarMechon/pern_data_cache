// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

// Initialise next-intl middleware
const intlMiddleware = createIntlMiddleware(routing);

export function middleware(req: NextRequest) {
  const res = intlMiddleware(req) ?? NextResponse.next();

  // Redirect "/" → "/<locale>/dashboard"
  // if (req.nextUrl.pathname === "/") {
  //   const savedLocale =
  //     req.cookies.get("NEXT_LOCALE")?.value || routing.defaultLocale || "en";
  //   const url = req.nextUrl.clone();
  //   url.pathname = `/${savedLocale}/dashboard`;
  //   return NextResponse.redirect(url);
  // }

  // Grab theme from cookie, default to light
  const theme = req.cookies.get("theme")?.value || "light";
  // Add it as a header so the layout can pick it up
  res.headers.set("x-theme", theme);

  return res;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
