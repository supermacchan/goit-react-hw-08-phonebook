import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

export const PrivateRoute = ({ 
    children, 
    redirectTo = '/login', 
    ...routeProps 
}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Route {...routeProps}>
            { isLoggedIn ? children : <Navigate to={redirectTo} /> }
        </Route>
    );
};

PrivateRoute.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    redirectTo: PropTypes.string.isRequired,
    children: PropTypes.node,
}