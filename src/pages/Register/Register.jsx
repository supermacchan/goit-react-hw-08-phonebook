import css from './Register.module.css';

const Register = () => {
    return (
        <>
            <h2 className={css.title}>Fill out the following form</h2>
            <form className={css.registrationForm}>
                <label
                    htmlFor="loginInputId"
                    className={css.label}
                >
                    Login
                </label>
                <input
                    type="text"
                    name="login"
                    pattern="[A-Za-z0-9]"
                    title="Login may contain letters and numbers"
                    id="loginInputId"
                    required
                    className={css.input}
                />

                <label
                    htmlFor="emailInputId"
                    className={css.label}
                >
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="Please enter a valid email address"
                    id="emailInputId"
                    required
                    className={css.input}
                />

                <label
                    htmlFor="passwordInputId"
                    className={css.label}
                >
                    Password
                </label>
                <input
                    type="text"
                    name="email"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    id="passwordInputId"
                    required
                    className={css.input}
                />
            </form>
        </>
    )
};

export default Register;