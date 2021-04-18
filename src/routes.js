import React from 'react';

const Home = React.lazy(() => import('./Home'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  }
];

export default routes;
