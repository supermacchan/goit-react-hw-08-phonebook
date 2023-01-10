import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        };
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        const newContact = {
            name,
            number,
        };
        dispatch(addContact(newContact));
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    };

        return (
            <form
                className={css.phonebook__form}
                onSubmit={handleFormSubmit}
            >
                <label
                    htmlFor="nameInputId"
                    className={css.phonebook__label}
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id="nameInputId"
                    required
                    onChange={handleInputChange}
                    className={css.phonebook__input}
                    value={name}
                />
                <label
                    htmlFor="telInputId"
                    className={css.phonebook__label}
                >
                    Number
                </label>
                < input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id="telInputId"
                    required
                    onChange={handleInputChange}
                    className={css.phonebook__input}
                    value={number}
                />
                <button
                    type="submit"
                    className={css.phonebook__button}
                >
                    Add Contact
                </button>
            </form>
        )
    };