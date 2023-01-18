import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import css from "./UserMenu.module.css";

export const UserMenu = () => {
    const name = useSelector(selectUserName);
    return (
        <div className={css.userMenu}>
            <p className={css.userName}>Hello, {name}!</p>
            <button type="button" className={css.logOutBtn}>Log Out</button>
        </div>
    );
}