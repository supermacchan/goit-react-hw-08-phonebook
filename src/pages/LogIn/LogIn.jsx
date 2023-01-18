import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { LoginSuccess } from 'components/LoginSuccess/LoginSuccess';
import { LogInForm } from 'components/LogInForm/LogInForm';
import css from './LogIn.module.css';

const LogIn = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <section className={css.login}>
            {isLoggedIn ? <LoginSuccess /> : <LogInForm />}
        </section>
    )
};

export default LogIn;