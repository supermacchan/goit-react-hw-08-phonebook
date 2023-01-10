import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactSlice";
import { getContacts, getFilter } from "redux/selectors";

import css from './ContactList.module.css';

import { ContactListItem } from "./ContactListItem";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    const deletingContact = id => {
        dispatch(deleteContact(id));
    }

    return (
        <ul className={css.contacts__list}>
            {filteredContacts.map(contact =>
                <ContactListItem
                    contact={contact}
                    onDeleteContact={deletingContact}
                    key={contact.id}
                />
            )}
        </ul>
    );
}
