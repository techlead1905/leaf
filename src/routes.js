const routes = [
  {
    name: 'MENU',
    children: [
      {
        exact: true,
        name: 'Home',
        path: '/home'
      },
      {
        exact: true,
        name: 'Dashboard',
        path: '/dashboard'
      }
    ]
  },
  {
    name: 'CONNECT',
    children: [
      {
        exact: true,
        name: 'Applications',
        path: '/applications'
      },
      {
        exact: true,
        name: 'Unification',
        path: '/unification'
      }
    ]
  },
  {
    name: 'AUDIT',
    children: [
      {
        exact: true,
        name: 'Systems',
        path: '/systems'
      },
      {
        exact: true,
        name: 'Digital Assets',
        path: '/dassets'
      },
      {
        exact: true,
        name: 'Space Lens',
        path: '/slens'
      }
    ]
  },
  {
    name: 'CLEANUP AND OPTIMISE',
    children: [
      {
        exact: true,
        name: 'Workflows',
        path: '/workflows'
      },
      {
        exact: true,
        name: 'System Junk',
        path: '/junk'
      }
    ]
  },
  {
    name: 'INSIGHTS',
    children: [
      {
        exact: true,
        name: 'IT Expenditure',
        path: '/expenditure'
      },
      {
        exact: true,
        name: 'Cyber Security',
        path: '/security'
      },
      {
        exact: true,
        name: 'Carbon footprint',
        path: '/footprint'
      }
    ]
  }
];

export default routes;
