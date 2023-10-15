const pagesRoutes = {
  dashboard: {
    path: '/dashboard',
  },
  browse: {
    path: '/browse',
  },
  teacher: {
    courses: {
      path: '/teacher/courses',
    },
    analytics: {
      path: '/teacher/analytics',
    },
  },
} as const;

export default pagesRoutes;
