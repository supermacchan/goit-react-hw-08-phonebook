import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
// import PropTypes from "prop-types";

export const PrivateRoute = ({ 
    component: Component, 
    redirectTo = '/login', 
}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const shouldRedirect = !isLoggedIn;

    return (
        shouldRedirect ? <Navigate to={redirectTo} /> : <Component />
    );
};

// PrivateRoute.propTypes = {
//     redirectTo: PropTypes.string.isRequired,
//     component: ??? func?
// }