import css from "./UserMenu.module.css";

export const UserMenu = () => {
    return (
        <div className={css.userMenu}>
            <p className={css.userName}>Hello, User!</p>
            <button type="button" className={css.logOutBtn}>Log Out</button>
        </div>
    );
}