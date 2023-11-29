import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {
  console.log('[ middleware.ts - 5 ] - req.cookies:', req.cookies);
  console.log('test');
}

export const config = {
  matcher: ['/dashboard/:path*', '/teacher/:path*'],
};
