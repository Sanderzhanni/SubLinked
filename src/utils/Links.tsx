export const links = [
  {
    path: '/',
    name: 'Home Page',
  },
  {
    path: '/project-graph',
    name: 'Project Graph',
  },
  {
    path: '/generate-graph',
    name: 'Generate a Graph',
  },
  {
    path: '/about-project',
    name: 'About Project',
  },
  {
    path: '/info',
    name: 'Info',
  },
];

export const getPathName = (pathName: string): string | undefined => {
  switch (pathName) {
    case '/':
      return '';
    case '/project-graph':
      return 'Project Graph';
    case '/generate-graph':
      return 'Generate a Custom Graph';
    case '/about-project':
      return 'Project Portfolio';
    case '/info':
      return 'Information';
  }
};
