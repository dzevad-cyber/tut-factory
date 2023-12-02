export const protectedRoutes = [
  '/dashboard',
  '/dashboard/browse',
  '/dashboard/analytics',
  '/dashboard/teacher',
  '/dashboard/teacher/create',
] as const;

export const publicRoutes = ['/register', '/login'] as const;

export const clientRoutes = [...protectedRoutes, ...publicRoutes] as const;

export type ProtectedRoutes = (typeof protectedRoutes)[number];
export type PublicRoutes = (typeof publicRoutes)[number];

export type ClientRoutes = ProtectedRoutes | PublicRoutes;
