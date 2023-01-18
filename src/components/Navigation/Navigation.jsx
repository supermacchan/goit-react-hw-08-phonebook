import { NavLink } from "react-router-dom";
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import css from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <>
            <NavLink to="/" className={css.header__link}>
                <BsFillJournalBookmarkFill className={css.header__icon} />
                Home
            </NavLink>
            {/* добавить условия отображения контактов (при логине) */}
            <NavLink to={"/contacts"} className={css.header__link}>
                Contacts
            </NavLink>    
        </>
    );
}