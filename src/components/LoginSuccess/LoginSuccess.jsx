import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { Link } from 'react-router-dom';
import css from './LoginSuccess.module.css';

export const LoginSuccess = () => {
    const name = useSelector(selectUserName);
    
    return (
        <div className={css.success}>
            <h2 className={css.title}>Welcome, {name}!</h2>
            <p className={css.notification}>
                You can now go to your <Link to={"/contacts"} className={css.link}>Contact list</Link>.
            </p>
        </div>
    )
}