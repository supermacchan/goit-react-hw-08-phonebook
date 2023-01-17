import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";
import { Layout } from './Layout';
// import { ContactList } from "./ContactList/ContactList";

// import css from './App.module.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path='/register' element={<Contacts />} />
            <Route path='/login' element={<Contacts />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
      </Routes>
      
      {/* <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter />
      <ContactList /> */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
};