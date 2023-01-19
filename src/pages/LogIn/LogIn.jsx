import { LogInForm } from 'components/LogInForm/LogInForm';
import css from './LogIn.module.css';

const LogIn = () => {
    return (
        <section className={css.login}>
            <LogInForm />
        </section>
    )
};

export default LogIn;