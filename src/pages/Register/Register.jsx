import css from './Register.module.css';

const Register = () => {
    return (
        <>
            <h2 className={css.title}>Fill out the following form</h2>
            <form className={css.registrationForm}>
                <label
                    htmlFor="nameInputId"
                    className={css.label}
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="nameInputId"
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
                <button type='submit' className={css.submitBtn}>Register</button>
            </form>
            
        </>
    )
};

export default Register;