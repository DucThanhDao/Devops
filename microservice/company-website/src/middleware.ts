import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // Remove locale prefixes (e.g., /en, /fr) from URL
  const localePattern = /^\/(en|vi)(\/|$)/; // Add any previous locales here
  if (localePattern.test(pathname)) {
    const newPath = pathname.replace(localePattern, '/'); // Remove locale
    return NextResponse.redirect(new URL(newPath, req.url));
  }

  return NextResponse.next();
}


export const config = { // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}