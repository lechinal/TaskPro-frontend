import React, { useState } from 'react';

import css from 'components/MainDashboard/MainDashboard.module.css';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddColumnModal from '../MainDashboard/AddColumnModal/AddColumnModal';
import Column from './Column/Column';

import icons from '../../images/sprite.svg';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '14px 79px',
          marginBottom: '24px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          textTransform: 'none',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '-0.28px',
          backgroundColor: '#161616',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#bedbb0',
            color: '#161616',
          },
        },
      },
    },
  },
});

function MainDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [columns, setColumns] = useState([]);

  const handleAddColumn = columnTitle => {
    setColumns(prevColumns => [...prevColumns, { title: columnTitle }]);
  };

  return (
    <ThemeProvider theme={theme}>
      <section className={css.mainDashboard}>
        {columns.map((column, index) => (
          <Column key={index} title={column.title} />
        ))}
        <Button
          className={css.mainDashboardButton}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <svg className={`${css.iconPlus} ${css.iconPlusBlack}`}>
            <use href={`${icons}#icon-plus-black`} />
          </svg>

          <svg className={`${css.iconPlus} ${css.iconPlusWhite}`}>
            <use href={`${icons}#icon-plus`} />
          </svg>
          <p>Add another column</p>
        </Button>
        {openModal && (
          <AddColumnModal
            closeModal={setOpenModal}
            onAddColumn={handleAddColumn}
          />
        )}
      </section>
    </ThemeProvider>
  );
}

export default MainDashboard;
