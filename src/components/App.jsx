import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { authOperations } from 'redux/auth/authOperations';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
    {!isRefreshing &&
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

            <Route path="/register" element={
            <PublicRoute component={Register} redirectTo="/contacts"/>} />
            
            <Route path="/login" element={
            <PublicRoute component={LogIn} redirectTo="/contacts"/>} />

            <Route path="/contacts" element={
            <PrivateRoute component={Contacts} redirectTo="/login" />} />

            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    }
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
};