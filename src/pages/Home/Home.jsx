import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { LoginSuccess } from 'components/LoginSuccess/LoginSuccess';
import css from './Home.module.css';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            {isLoggedIn ? <LoginSuccess /> :
            <div>
                <h1 className={css.title}>Welcome Home</h1>
            </div>}
        </> 
    )
};

export default Home;