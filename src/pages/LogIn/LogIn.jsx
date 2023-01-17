import css from './LogIn.module.css';

const LogIn = () => {
    return (
        <>
            <h2 className={css.title}>Sign in below</h2>
            <form className={css.logInForm}>
                <label
                    htmlFor="emailInputId"
                    className={css.label}
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
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
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    id="passwordInputId"
                    required
                    className={css.input}
                />
                <button type='submit' className={css.logInBtn}>Sign In</button>
            </form>
        </>
    )
};

export default LogIn;