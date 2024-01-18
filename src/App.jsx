import WelcomePage from 'pages/WelcomePage/WelcomePage';
import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
 

import { Routes, Route } from 'react-router-dom';
 
import ScreensPage from 'pages/ScreensPage/ScreensPage';

export const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:boardName" element={<ScreensPage />} />
      </Routes>
    </>
  );
};

export default App;
