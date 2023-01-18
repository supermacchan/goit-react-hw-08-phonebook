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
        <>
            {isLoggedIn ? 
            <>
                <h1 className={css.phonebook__title}>Phonebook</h1>
                <ContactForm />

                <h2 className={css.contacts__title}>Contacts</h2>
                <Filter />
                <ContactList />
            </>
            : <LoggedOut />}
        </>
    )
};

export default Contacts;