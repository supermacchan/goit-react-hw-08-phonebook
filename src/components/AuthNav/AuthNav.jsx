import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
    return (
        <>
            <NavLink to={"/register"} className={css.header__link}>
                Register
            </NavLink>
            <NavLink to={"/login"} className={css.header__link}>
                Log In
            </NavLink>  
        </>
    );
}