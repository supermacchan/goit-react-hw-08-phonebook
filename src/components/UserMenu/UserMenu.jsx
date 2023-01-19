import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';
import css from "./UserMenu.module.css";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    const handleLogOut = () => {
        dispatch(authOperations.logOut());
    }
    return (
        <div className={css.userMenu}>
            <p className={css.userName}>Hello, {name}!</p>
            <button type="button" className={css.logOutBtn} onClick={handleLogOut}>Log Out</button>
        </div>
    );
}