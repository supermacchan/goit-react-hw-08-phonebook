import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import css from './LogIn.module.css';

const LogIn = () => {
    return (
        <section className={css.login}>
            <h2 className={css.title}>Sign in below</h2>
            <form className={css.logInForm}>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        <label
                            htmlFor="emailInputId"
                            className={css.label}
                        >
                            <HiOutlineMail className={css.icon} /> Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="emailInputId"
                            required
                            className={css.input}
                        />
                    </li>
                    <li className={css.listItem}>
                        <label
                            htmlFor="passwordInputId"
                            className={css.label}
                        >
                            <RiLockPasswordLine className={css.icon} /> Password
                        </label>
                        <input
                            type="text"
                            name="email"
                            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            id="passwordInputId"
                            required
                            className={css.input}
                        />
                    </li>
                </ul>
                <button type='submit' className={css.submitBtn}>Sign In</button>
            </form>
        </section>
    )
};

export default LogIn;