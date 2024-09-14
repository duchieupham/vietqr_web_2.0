import { NextResponse } from 'next/server';
import {
  AUTH_COOKIE,
  DEFAULT_PATH,
  PUBLIC_PATHS,
  UNAUTHORIZED_PUBLIC_PATHS,
} from './constants';
import decodeJwt from './utils/decodeJwt';

export function routingMiddleware(req) {
  const path = req.nextUrl.pathname;

  if (path === '/') {
    return NextResponse.redirect(new URL(DEFAULT_PATH, req.url));
  }
  const isPublicPath = PUBLIC_PATHS.includes(path);
  const isUnAuthPath = UNAUTHORIZED_PUBLIC_PATHS.includes(path);

  // Get the token from the cookies
  const token = req.cookies.get(AUTH_COOKIE)?.value;

  if (token) {
    const decodedToken = decodeJwt(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken.exp < currentTime) {
      const res = NextResponse.redirect(new URL('/expired', req.url));
      res.cookies.set(AUTH_COOKIE, null);
      return res;
    }
  } else {
    if (isPublicPath) return NextResponse.next();

    return NextResponse.redirect(new URL('/login', req.url));
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
