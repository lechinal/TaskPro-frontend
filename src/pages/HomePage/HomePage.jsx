import React from 'react';
import css from './HomePage.module.css';

import SideBar from '../../components/SideBar/SideBar';
import { Header } from '../../components/Header/Header';
import ScreensPage from '../ScreensPage/ScreensPage';

function HomePage() {
  return (
    <div className={css.home}>
      <SideBar />
      <div>
        <Header />
        <ScreensPage />
      </div>
    </div>
  );
}

export default HomePage;
