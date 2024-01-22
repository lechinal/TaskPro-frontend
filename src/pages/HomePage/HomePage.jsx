import React from 'react';
import { Header } from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';

function HomePage() {
  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
      <ScreensPage />
    </div>
  );
}

export default HomePage;
