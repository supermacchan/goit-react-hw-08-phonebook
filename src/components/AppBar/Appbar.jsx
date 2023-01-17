import { NavLink } from "react-router-dom";
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import css from "./AppBar.module.css";

export const AppBar = () => {
    return (
        <header className={css.header}>
            <nav className={css.header__nav}>
                <NavLink to="/" className={css.header__link}>
                    <BsFillJournalBookmarkFill className={css.header__icon} />
                    Home
                </NavLink>
                <NavLink to={"/contacts"} className={css.header__link}>
                    Contacts
                </NavLink>
            </nav>
        </header>
    );
}