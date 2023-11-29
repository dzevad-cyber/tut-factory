import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/dashboard') &&
    !req.cookies.has('__auth_tf__')
  ) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}
