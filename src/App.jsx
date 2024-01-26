import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy} from 'react';

import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
import { refresh } from './redux/auth/authOperations';
import Loader from './components/Loader/Loader';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import HomePage from 'pages/HomePage/HomePage';
import AuthPage from 'pages/AuthPage/AuthPage';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';
import Help from 'components/Help/Help';
import SideBar from 'components/SideBar/SideBar';
import MainDashboard from 'components/MainDashboard/MainDashboard';
import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';

 

export const App = () => {
 
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/home" component={<HomePage />} />
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