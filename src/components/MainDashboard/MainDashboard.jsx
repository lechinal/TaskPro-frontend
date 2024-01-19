import React, { useState } from 'react';
import css from 'components/MainDashboard/MainDashboard.module.css';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';

import AddColumnModal from '../MainDashboard/AddColumnModal/AddColumnModal';

import icons from '../../images/sprite.svg';

function MainDashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <StyledEngineProvider injectFirst>
      <section className={css.mainDashboard}>
        <Button
          className={css.mainDashboardButton}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <svg className={css.iconPlus}>
            <use href={`${icons}#icon-plus`} />
          </svg>
          <p>Add another column</p>
        </Button>

        {openModal && <AddColumnModal closeModal={setOpenModal} />}
      </section>
    </StyledEngineProvider>
  );
}

export default MainDashboard;
