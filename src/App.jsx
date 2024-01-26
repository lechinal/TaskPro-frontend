import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
// import { useAuth } from './hooks';
import { refresh } from './redux/auth/authOperations';
import Loader from './components/Loader/Loader';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import HomePage from 'pages/HomePage/HomePage';
import AuthPage from 'pages/AuthPage/AuthPage';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';
 
 

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  // useEffect(() => {
  //   if (
  //     isLoggedIn &&
  //     allBoards.length > 0 &&
  //     Object.keys(activeBoard).length === 0
  //   ) {
  //     navigate(`/home/${allBoards[0]._id}`);
  //   }

  //   if (isLoggedIn && allBoards.length === 0) {
  //     navigate('/home');
  //   }
  // }, [navigate, allBoards, activeBoard, isLoggedIn]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/home" component={<WelcomePage />} />
          }
        />
        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
        />
        <Route
          path="/home/:boardName"
          element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
        />
        <Route
          path="/auth/:id"
          element={
            <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
          }
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Suspense>
  );
};

export default App;