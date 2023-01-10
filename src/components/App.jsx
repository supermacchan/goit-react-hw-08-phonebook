import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import css from './App.module.css';


export const App = () => {
  return (
    <>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter />
      <ContactList />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
};