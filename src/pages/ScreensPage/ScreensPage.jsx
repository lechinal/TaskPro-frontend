import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveBoard } from '../../redux/boards/boardSelectors';

import css from '../ScreensPage/ScreensPage.module.css';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import MainDashboard from '../../components/MainDashboard/MainDashboard';

function ScreensPage() {
  const activeBoard = useSelector(selectActiveBoard);
  const boardTitle =
    activeBoard && activeBoard.title ? activeBoard.title : 'No title';

  return (
    <section className={css.screensPage}>
      <HeaderDashboard boardTitle={boardTitle} />
      <MainDashboard />
    </section>
  );
}

export default ScreensPage;
