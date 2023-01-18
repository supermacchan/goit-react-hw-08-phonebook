import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import css from './LoginSuccess.module.css';

export const LoginSuccess = () => {
    const name = useSelector(selectUserName);
    return (
        <div className={css.success}>
            <h2 className={css.title}>Welcome back, {name}!</h2>
            
        </div>
    )
}