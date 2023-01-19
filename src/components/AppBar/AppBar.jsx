import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigation } from "components/Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.header}>
            <nav className={css.header__nav}>
                <Navigation />
            </nav>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}