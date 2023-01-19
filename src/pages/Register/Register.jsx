import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import css from './Register.module.css';

const Register = () => {

    return (
        <section className={css.registration}>
            <RegistrationForm/>
        </section>
    )
};

export default Register;