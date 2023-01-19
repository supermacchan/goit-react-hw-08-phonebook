import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import PropTypes from "prop-types";

export const PublicRoute = ({ 
    component: Component, 
    redirectTo = '/contacts', 
}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const shouldRedirect = isLoggedIn;
    return (
        shouldRedirect ? <Navigate to={redirectTo} /> : <Component />
    );
};

PublicRoute.propTypes = {
    redirectTo: PropTypes.string.isRequired,
    component: PropTypes.object.isRequired,
};