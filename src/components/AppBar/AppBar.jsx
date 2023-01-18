import { Navigation } from "components/Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import css from "./AppBar.module.css";

export const AppBar = () => {
    return (
        <header className={css.header}>
            <nav className={css.header__nav}>
                <Navigation />
                <AuthNav />
            </nav>
        </header>
    );
}