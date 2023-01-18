import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { LoginSuccess } from 'components/LoginSuccess/LoginSuccess';
import { LoggedOut } from 'components/LoggedOut/LoggedOut';
// import css from './Home.module.css';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            {isLoggedIn ? <LoginSuccess /> : <LoggedOut />}
        </> 
    )
};

export default Home;