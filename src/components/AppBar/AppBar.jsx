import { NavLink } from "react-router-dom";
import { Navigation } from "components/Navigation/Navigation";
import css from "./AppBar.module.css";

export const AppBar = () => {
    return (
        <header className={css.header}>
            <nav className={css.header__nav}>
                <Navigation />
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