import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// components
import AppBar from 'components/AppBar/AppBar';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
