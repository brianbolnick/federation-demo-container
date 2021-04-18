import React, { lazy } from 'react';

const Navbar = lazy(() => import('federation_demo_navbar/Navbar'));

const Home = () => {
  return (
    <div>
      <React.Suspense fallback="Loading Navbar...">
        <Navbar />
      </React.Suspense>

      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
