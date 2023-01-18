import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { LoginSuccess } from 'components/LoginSuccess/LoginSuccess';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import css from './Register.module.css';

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(authOperations.register({ name, email, password }));
        reset();
    }

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <section className={css.registration}>
            {isLoggedIn ? <LoginSuccess /> : <>
            <h2 className={css.title}>Fill out the following form to register</h2>
            <form className={css.registrationForm} onSubmit={handleSubmit}>
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
                            value={name}
                            onChange={handleChange}
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
                <button type='submit' className={css.submitBtn}>Register</button>
            </form>
            </>}
        </section>
    )
};

export default Register;