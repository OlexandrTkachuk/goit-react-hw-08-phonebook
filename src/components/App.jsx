import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from 'units/scrollToTop';

import LoadingSpinner from './Loading/LoadingSpinner';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
