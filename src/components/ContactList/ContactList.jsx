import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectFilter } from "redux/selectors";
import { MdOutlineError } from "react-icons/md";

import css from './ContactList.module.css';

import { ContactListItem } from "./ContactListItem";

export const ContactList = () => {
    const { items, isLoading, error } = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <ul className={css.contacts__list}>
            {isLoading && <Loader />}
            {error && <div className={css.error}><MdOutlineError className={css.error_icon} /> {error}</div>}
            {filteredContacts.length > 0 &&
                filteredContacts.map(contact =>
                <ContactListItem
                    contact={contact}
                    key={contact.id}
                />
            )}
        </ul>
    );
}
