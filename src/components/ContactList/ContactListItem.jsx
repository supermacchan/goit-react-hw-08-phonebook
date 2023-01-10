import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact: {id, name, number}, onDeleteContact }) => {
    return (
        <li className={css.contacts__listItem} >
            <span>{name}: {number}</span>
                <button
                    type="button"
                    className={css.contacts__delBtn}
                    onClick={() => onDeleteContact(id)}
                >
                    Delete
                </button>
        </li> 
    );
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};