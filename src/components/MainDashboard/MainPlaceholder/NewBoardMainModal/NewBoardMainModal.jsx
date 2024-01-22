import React from 'react';
import css from '../NewBoardMainModal/NewBoardMainModal.module.css';
import icons from '../../../../images/sprite.svg';

import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#bedbb0',
          color: '#161616',
          borderRadius: '8px',
          textTransform: 'none',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '-0.28px',
          padding: '10px 0 10px 0',

          '&:hover': {
            backgroundColor: '#151515',
            color: '#fff',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'rgba(255, 255, 255, 0.3)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '1px solid #BEDBB0;',
          borderRadius: '8px',
          opacity: '0.4',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          color: '#fff',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '400',
        },
      },
    },
  },
});

function NewBoardMainModal({ setOpenModal }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={css.modalBackground}>
        <div className={css.modalContainer}>
          <div className={css.closeBtnBox}>
            <IconButton
              className={css.closeBtn}
              onClick={() => setOpenModal(false)}
            >
              <svg className={css.iconClose}>
                <use href={`${icons}#icon-close`} />
              </svg>
            </IconButton>
          </div>
          <div className={css.body}>
            <div className={css.modalTitle}>
              <h5>New board</h5>
            </div>

            <div className={css.inputBox}>
              <FormControl variant="outlined">
                <InputLabel
                  className={css.input}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  Title
                </InputLabel>
                <OutlinedInput
                  label="Title"
                  fullWidth
                  sx={{ width: '287px' }}
                />
              </FormControl>
            </div>

            <div className={css.iconsTitle}>
              <h6>Icons</h6>
              <div className={css.projectIcons}>icon1 icon2 icon3</div>
            </div>

            <div className={css.backgroundsTitle}>
              <h6>Background</h6>
              <div className={css.backgrounds}>bg1 bg2 bg3</div>
            </div>

            <div className={css.createBtnBox}>
              <Button type="submit" className={css.createBtn}>
                <svg className={`${css.iconPlus} ${css.iconPlusBlack}`}>
                  <use href={`${icons}#icon-plus-black`} />
                </svg>

                <svg className={`${css.iconPlus} ${css.iconPlusWhite}`}>
                  <use href={`${icons}#icon-plus`} />
                </svg>
                <p>Create</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default NewBoardMainModal;
