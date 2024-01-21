import React from 'react';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import ScreensPage from 'pages/ScreensPage/ScreensPage';

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';
import { refresh } from './redux/auth/authOperations';
import Loader from './components/Loader/Loader';
 

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (    
    <>
    {isRefreshing ? (
      <Loader/>
    ) : (
      <Routes>     
      
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/home/:boardName" element={<ScreensPage />} />
      </Routes>
      )}
    </>
    
  );
};

export default App;
