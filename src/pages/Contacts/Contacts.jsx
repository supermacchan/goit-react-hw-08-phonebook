import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Filter } from "../../components/Filter/Filter";
import { ContactList } from "../../components/ContactList/ContactList";
import css from './Contacts.module.css';

const Contacts = () => {
    return (
        <>
            <h1 className={css.phonebook__title}>Phonebook</h1>
            <ContactForm />

            <h2 className={css.contacts__title}>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    )
};

export default Contacts;