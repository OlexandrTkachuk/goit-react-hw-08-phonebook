import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from 'units/scrollToTop';

import LoadingSpinner from './Loading/LoadingSpinner';

const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
