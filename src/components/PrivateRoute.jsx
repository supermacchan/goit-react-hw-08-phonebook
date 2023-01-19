import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

export default function PrivateRoute({ children, ...routeProps }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Routes>
        <Route {...routeProps}>
            { isLoggedIn ? children : <Navigate to="/login" /> }
        </Route>
        </Routes>
    );
};

PrivateRoute.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    children: PropTypes.node,
}