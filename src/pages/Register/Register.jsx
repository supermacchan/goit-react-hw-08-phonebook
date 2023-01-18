import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { LoginSuccess } from 'components/LoginSuccess/LoginSuccess';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import css from './Register.module.css';

const Register = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <section className={css.registration}>
            {isLoggedIn ? <LoginSuccess /> : <RegistrationForm/>}
        </section>
    )
};

export default Register;