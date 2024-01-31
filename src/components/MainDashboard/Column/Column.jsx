import React from 'react';
import css from './Column.module.css';
import icons from '../../../images/sprite.svg';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardFormColumn from 'components/CardForm/CardFormColumn';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '14px 89px',
          marginBottom: '24px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          textTransform: 'none',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '-0.28px',
          backgroundColor: '#bedbb0',
          color: '#161616',
          '&:hover': {
            backgroundColor: '#161616',
            color: '#fff',
          },
        },
      },
    },
  },
});

function Column({ title }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={css.columnContainer}>
        <div className={css.columnHeader}>
          <span className={css.columnHeaderTitle}>{title}</span>
          <div className={css.columnHeaderControls}>
            <button className={css.editBtn}>
              <svg className={css.editSvg} width={16} height={16}>
                <use href={`${icons}#icon-pencil`} />
              </svg>
            </button>
            <button className={css.deleteBtn}>
              <svg className={css.deleteSvg} width={16} height={16}>
                <use href={`${icons}#icon-trash`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.cardListContainer}>
     <CardFormColumn/>
        </div>
        <div className={css.BtnContainer}>
          <Button className={css.addCardBtn}>
            <svg className={`${css.iconPlus} ${css.iconPlusBlack}`}>
              <use href={`${icons}#icon-plus-black`} />
            </svg>

            <svg className={`${css.iconPlus} ${css.iconPlusWhite}`}>
              <use href={`${icons}#icon-plus`} />
            </svg>
            <p>Add another card</p>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Column;
