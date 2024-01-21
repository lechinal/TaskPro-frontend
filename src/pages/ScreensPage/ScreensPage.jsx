import React from 'react';
import css from '../ScreensPage/ScreensPage.module.css';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import MainDashboard from '../../components/MainDashboard/MainDashboard';
import MainPlaceholder from '../../components/MainDashboard/MainPlaceholder/MainPlaceholder';
function ScreensPage() {
  return (
    <section className={css.screensPage}>
      <HeaderDashboard />
      <div>
        <MainDashboard />
      </div>
      <MainPlaceholder />
    </section>
  );
}

export default ScreensPage;
