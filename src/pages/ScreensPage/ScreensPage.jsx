import React from 'react';
import css from '../ScreensPage/ScreensPage.module.css';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import MainDashboard from '../../components/MainDashboard/MainDashboard';

function ScreensPage() {
  return (
    <div className={css.screensPage}>
      <HeaderDashboard />
      <MainDashboard />
    </div>
  );
}

export default ScreensPage;
