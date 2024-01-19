import React from 'react';
import css from '../HeaderDashboard/HeaderDashboard.module.css';

import Filters from 'components/Filters/Filters';

function HeaderDashboard() {
  return (
    <section className={css.headerDashboard}>
      <h1 className={css.headerDashboardTitle}>Project office</h1>
      <Filters />
    </section>
  );
}

export default HeaderDashboard;
