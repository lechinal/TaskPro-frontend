import WelcomePage from 'pages/WelcomePage/WelcomePage';
import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import ScreensPage from 'pages/ScreensPage/ScreensPage';

import { Routes, Route } from 'react-router-dom';


export const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/home/:boardName" element={<ScreensPage />} />
      </Routes>
    </>
  );
};

export default App;
