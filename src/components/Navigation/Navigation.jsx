import { NavLink } from "react-router-dom";
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import css from "./Navigation.module.css";

export const Navigation = () => {
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
                <NavLink to={"/register"} className={css.header__link}>
                    Register
                </NavLink>
                <NavLink to={"/login"} className={css.header__link}>
                    Log In
                </NavLink>
            </nav>
        </header>
    );
}