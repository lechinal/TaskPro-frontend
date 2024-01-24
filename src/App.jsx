import React from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import ScreensPage from './pages/ScreensPage/ScreensPage';

// import PrivateRoute from './Routes/PrivateRoute';
// import RestrictedRoute from './Routes/RestrictedRoute';

// import { selectIsLoggedIn } from './redux/auth/authSelectors';
// import {
//   selectActiveBoard,
//   selectBoardsList,
// } from './redux/boards/boardSelectors';

import { Routes, Route } from 'react-router-dom';
// Navigate, useNavigate;
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from './hooks';
import { refresh } from './redux/auth/authOperations';

import Loader from './components/Loader/Loader';

export const App = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // const allBoards = useSelector(selectBoardsList);
  // const activeBoard = useSelector(selectActiveBoard);
  // const navigate = useNavigate();

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
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/home/:boardName" element={<ScreensPage />} />
        </Routes>
        // <Routes>
        //   <Route
        //     path="/"
        //     element={
        //       <RestrictedRoute
        //         redirectTo="/home"
        //         component={<Navigate to="/welcome" />}
        //       />
        //     }
        //   />
        //   <Route
        //     path="/welcome"
        //     element={
        //       <RestrictedRoute redirectTo="/home" component={<WelcomePage />} />
        //     }
        //   />

        //   <Route path="/auth" element={<Navigate to="/auth/login" />} />
        //   <Route
        //     path="/auth/:id"
        //     element={
        //       <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
        //     }
        //   />

        //   <Route
        //     path="/home"
        //     element={
        //       <PrivateRoute redirectTo="/auth" component={<HomePage />} />
        //     }
        //   />

        //   <Route
        //     path="/home/:boardName"
        //     element={
        //       <PrivateRoute redirectTo="/auth" component={<HomePage />} />
        //     }
        //   />

        //   <Route path="*" element={<Navigate to="/" />} />
        // </Routes>
      )}
    </>
  );
};

export default App;
