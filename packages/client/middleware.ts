import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isProtectedRoute } from './page-routes/pageRoutes.helpers';

export function middleware(req: NextRequest) {
  // if (req.nextUrl.pathname === '/' && req.cookies.has('__auth_tf__')) {
  //   return NextResponse.redirect(new URL('/dashboard', req.url));
  // }
  // else
  if (
    isProtectedRoute(req.nextUrl.pathname) &&
    !req.cookies.has('__auth_tf__')
  ) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}
