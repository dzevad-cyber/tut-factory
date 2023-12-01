import { type ProtectedRoutes, protectedRoutes } from './pageRoutes';

export const isProtectedRoute = (urlPath: string) => {
  return protectedRoutes.includes(urlPath as ProtectedRoutes);
};
