export const pageRoutes = {
  protected: {
    '/dashboard': '/dashboard',
    '/dashboard/browser': '/dashboard/browser',
    '/dashboard/teacher': '/dashboard/teacher',
    '/dashboard/teacher/create': '/dashboard/teacher/create',
  },
  public: {
    '/register': '/register',
    '/login': '/login',
  },
};

export type PageRoutes = typeof pageRoutes;

export type PublicRoutes = typeof pageRoutes.public;
export type PublicRoutesKeys = keyof typeof pageRoutes.public;

export type ProtecedRoutes = typeof pageRoutes.protected;
export type ProtectedRoutesKeys = keyof typeof pageRoutes.protected;
