// dashboard
export const DASHBOARD_TYPE = [
  {
    id: 'home',
    label: 'home-dashboard',
    path: '/dashboard/home',
    routes: [
      {
        id: 'general',
        label: 'general',
        path: '/',
      },
      {
        id: 'transaction',
        label: 'transaction management',
        path: '/transaction',
      },
    ],
  },
  {
    id: 'agent',
    label: 'agent-dashboard',
    path: '/dashboard/agent',
    routes: [
      {
        id: 'business',
        label: 'business information',
        path: '/business',
      },
      {
        id: 'sale',
        label: 'sale management',
        path: '/sale',
      },
    ],
  },
];
