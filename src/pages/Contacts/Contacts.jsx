import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Filter } from "../../components/Filter/Filter";
import { ContactList } from "../../components/ContactList/ContactList";
import css from './Contacts.module.css';

const Contacts = () => {

    return (
        <section className={css.phonebook}>
            <ContactForm />
            <div className={css.contactList}>
                <h2 className={css.title}>Your Contacts</h2>
                <Filter />
                <ContactList />
            </div>
        </section>
    )
};

export default Contacts;