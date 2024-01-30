import React from 'react';

import css from '../ScreensPage/ScreensPage.module.css';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import MainDashboard from '../../components/MainDashboard/MainDashboard';

function ScreensPage() {
  return (
    <section className={css.screensPage}>
      <HeaderDashboard />
      <MainDashboard />
    </section>
  );
}

export default ScreensPage;
