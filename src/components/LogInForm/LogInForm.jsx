import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import css from './LogInForm.module.css';

export const LogInForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password': 
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h2 className={css.title}>Sign in below</h2>
            <form className={css.logInForm} onSubmit={handleSubmit}>
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
                            value={email}
                            onChange={handleChange}
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
                            type="password"
                            name="password"
                            id="passwordInputId"
                            required
                            className={css.input}
                            value={password}
                            onChange={handleChange}
                        />
                    </li>
                </ul>
                <button type='submit' className={css.submitBtn}>Sign In</button>
            </form>
            <h3 className={css.notice}>Don't have an account yet? <Link to={"/register"} className={css.link}>Sign up here!</Link></h3>
        </>
    );
}