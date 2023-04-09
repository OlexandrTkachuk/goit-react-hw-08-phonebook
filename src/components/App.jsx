import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
      </Routes>
    </>
  );
};

export default App;
