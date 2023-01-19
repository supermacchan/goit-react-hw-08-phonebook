import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Filter } from "../../components/Filter/Filter";
import { ContactList } from "../../components/ContactList/ContactList";
import { LoggedOut } from 'components/LoggedOut/LoggedOut';
import css from './Contacts.module.css';

const Contacts = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <section className={css.phonebook}>
            {isLoggedIn ? 
            <>
                <ContactForm />
                <div className={css.contactList}>
                    <h2 className={css.title}>Your Contacts</h2>
                    <Filter />
                    <ContactList />
                </div>
            </>
            : <LoggedOut />}
        </section>
    )
};

export default Contacts;