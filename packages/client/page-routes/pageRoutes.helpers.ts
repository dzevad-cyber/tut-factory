import { pageRoutes } from './pageRoutes';

export const isProtectedRoute = (route: string) => {
  return Object.values(pageRoutes.protected).includes(route);
};
