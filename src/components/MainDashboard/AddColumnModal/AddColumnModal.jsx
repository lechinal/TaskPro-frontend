import React from 'react';
import css from '../AddColumnModal/AddColumnModal.module.css';
import icons from '../../../images/sprite.svg';
// import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

function AddColumnModal({ closeModal }) {
  return (
    <StyledEngineProvider injectFirst>
      <div className={css.modalBackground}>
        <div className={css.modalContainer}>
          <div className={css.closeBtnBox}>
            <button className={css.closeBtn} onClick={() => closeModal(false)}>
              <svg className={css.iconClose}>
                <use href={`${icons}#icon-close`} />
              </svg>
            </button>
          </div>
          <div className={css.body}>
            <div className={css.titleBox}>
              <h5>Add column</h5>
            </div>

            <div className={css.inputBox}>
              <FormControl variant="outlined">
                <InputLabel
                  className={css.input}
                  sx={{
                    color: '#fff',
                    opacity: '0.4',
                  }}
                >
                  Title
                </InputLabel>
                <OutlinedInput
                  label="Title"
                  fullWidth
                  sx={{
                    border: '1px solid #BEDBB0;',
                    borderRadius: '8px',
                    width: '287px',
                    boxShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.08)',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '400',
                    letterSpacing: '-0.28px',
                    color: '#fff',
                    opacity: '0.4',
                  }}
                />
              </FormControl>
            </div>

            <div className={css.addBtnBox}>
              <button className={css.addColumnBtn}>
                <svg className={css.iconPlus}>
                  <use href={`${icons}#icon-plus-black`} />
                </svg>
                <p>Add</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
}

export default AddColumnModal;
