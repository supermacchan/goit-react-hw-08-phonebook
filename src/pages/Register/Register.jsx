import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import css from './Register.module.css';

const Register = () => {
    return (
        <section className={css.registration}>
            <h2 className={css.title}>Fill out the following form</h2>
            <form className={css.registrationForm}>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        <label
                            htmlFor="nameInputId"
                            className={css.label}
                        >
                           <BsFillPersonFill className={css.icon} /> Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="nameInputId"
                            required
                            className={css.input}
                        />
                    </li>
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
                <button type='submit' className={css.submitBtn}>Register</button>
            </form>
        </section>
    )
};

export default Register;