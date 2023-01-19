import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

export const PublicRoute = ({ 
    children, 
    restricted = false, 
    redirectTo = '/contacts', 
    ...routeProps 
}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            { shouldRedirect ? <Navigate to="/contacts" /> : children }
        </Route>
    );
};

PublicRoute.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    restricted: PropTypes.bool,
    redirectTo: PropTypes.string.isRequired,
    children: PropTypes.node,
}