import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

            <PublicRoute path='/register' restricted>
              <Register />
            </PublicRoute>

            <PublicRoute path='/login' restricted>
              <LogIn />
            </PublicRoute>

            <PrivateRoute path="/contacts">     
              <Contacts />
            </PrivateRoute>

            {/* <Route path='/register' element={<Register />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/contacts' element={<Contacts />} /> */}
            
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>

      {/* <PublicRoute path='/register' restricted>
        <Register />
      </PublicRoute>

      <PublicRoute path='/login' restricted>
        <Register />
      </PublicRoute>

      <PrivateRoute path="/contacts">     
        <Contacts />
      </PrivateRoute> */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
};