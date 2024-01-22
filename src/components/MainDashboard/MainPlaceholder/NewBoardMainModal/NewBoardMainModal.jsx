import React from 'react';
import css from '../NewBoardMainModal/NewBoardMainModal.module.css';
import icons from '../../../../images/sprite.svg';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

function NewBoardMainModal({ setOpenModal }) {
  return (
    <div className={css.modalBackground}>
      <div className={css.modalContainer}>
        <div className={css.closeBtnBox}>
          <button className={css.closeBtn} onClick={() => setOpenModal(false)}>
            <svg className={css.iconClose}>
              <use href={`${icons}#icon-close`} />
            </svg>
          </button>
        </div>

        <div className={css.modalTitle}>
          <h5>New board</h5>
        </div>

        <div>
          <FormControl variant="outlined">
            <InputLabel
              className={css.input}
              sx={{
                color: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              Title
            </InputLabel>
            <OutlinedInput label="Title" fullWidth sx={{ width: '287px' }} />
          </FormControl>
        </div>

        <div className={css.iconsTitle}>
          <h6>Icons</h6>
        </div>

        <div className={css.projectIcons}>icon1 icon2 icon3</div>

        <div className={css.backgroundsTitle}>
          <h6>Background</h6>
        </div>
        <div className={css.backgrounds}>bg1 bg2 bg3</div>

        <div className={css.createBtnBox}>
          <button type="submit" className={css.createBtn}>
            <svg className={`${css.iconPlus} ${css.iconPlusBlack}`}>
              <use href={`${icons}#icon-plus-black`} />
            </svg>

            <svg className={`${css.iconPlus} ${css.iconPlusWhite}`}>
              <use href={`${icons}#icon-plus`} />
            </svg>
            <p>Create</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewBoardMainModal;
