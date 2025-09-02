import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
export default createMiddleware(routing);

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { nextUrl } = req;

  // Check if user is visiting root
  if (nextUrl.pathname === "/") {
    // Get locale from cookie (server-side storage)
    const savedLocale = req.cookies.get("NEXT_LOCALE")?.value;

    // Fallback: default locale
    const locale = savedLocale || "en";

    // Redirect to dashboard in the proper locale
    nextUrl.pathname = `/${locale}/dashboard`;
    return NextResponse.redirect(nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
