import { Link } from 'react-router-dom';
import css from './LoggedOut.module.css';

export const LoggedOut = () => {
    return (
        <div className={css.unauthorized}>
            <h2 className={css.title}>Hi there, stranger!</h2>
            <p className={css.notification}>
                You need to be signed in to be able to use the Phonebook.
            </p>
            <img 
                src={require('../../images/register.png')} 
                alt="welcome" 
                className={css.image}
            />
            <p className={css.choice}>
                If you do not have an account, you can <Link to={"/register"} className={css.link}>register</Link> here.
            </p>
            <p className={css.choice}>
                If you already have an account, please <Link to={"/login"} className={css.link}>sign in</Link> here.
            </p>
        </div>
    )
}