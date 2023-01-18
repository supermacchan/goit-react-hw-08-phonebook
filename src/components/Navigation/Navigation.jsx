import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import css from "./Navigation.module.css";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <NavLink to="/" className={css.header__link}>
                <BsFillJournalBookmarkFill className={css.header__icon} />
                Home
            </NavLink>
            {isLoggedIn && 
                <NavLink to={"/contacts"} className={css.header__link}>
                    Contacts
                </NavLink>  
            }       
        </>
    );
}