import { NextResponse } from 'next/server';
import { AUTH_COOKIE, DEFAULT_PATH, PUBLIC_PATHS } from './constants';

export function routingMiddleware(req) {
  const path = req.nextUrl.pathname;

  if (path === '/') {
    return NextResponse.redirect(new URL(DEFAULT_PATH, req.url));
  }
  const isPublicPath = PUBLIC_PATHS.includes(path);

  // Get the token from the cookies
  const token = req.cookies.get(AUTH_COOKIE)?.value;

  // Redirect to login if accessing a protected route without a token
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Redirect to home if accessing login/register while authenticated
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(DEFAULT_PATH, req.url));
  }

  return NextResponse.next();
}

export function middleware(req) {
  return routingMiddleware(req);
}

export const config = {
  matcher: [
    '/((?!api|images|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
