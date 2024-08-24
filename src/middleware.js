import { NextResponse } from 'next/server';

export function middleware(req) {
  const path = req.nextUrl.pathname;
  // Define which paths are considered public
  const isPublicPath = path === '/login' || path === '/register';

  // Get the token from the cookies
  const token = req.cookies.get('auth_token')?.value;

  // Redirect to login if accessing a protected route without a token
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Redirect to home if accessing login/register while authenticated
  // if (isPublicPath && token) {
  //   return NextResponse.redirect(new URL('/', req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|images|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
