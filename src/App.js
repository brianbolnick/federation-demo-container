import React, { lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import localRoutes from './routes';
import remoteRoutes from 'federation_demo_about/routes';

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <HashRouter>
    <div>
      <Navigation />

      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </div>
  </HashRouter>
);

export default App;
