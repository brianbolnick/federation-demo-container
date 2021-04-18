import React, { lazy } from 'react';

const Button = lazy(() => import('federation_demo_design/Button'));

const AboutPage = () => (
  <div style={{ padding: '16px' }}>
    <h1 style={{ color: '#264653' }}>Home Page</h1>

    <React.Suspense fallback="Loading Button...">
      <Button>Click me on home!</Button>
    </React.Suspense>
  </div>
);

export default AboutPage;
