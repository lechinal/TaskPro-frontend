import React from 'react';
import css from '../AddColumnModal/AddColumnModal.module.css';
import icons from '../../../images/sprite.svg';

function AddColumnModal({ closeModal }) {
  return (
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
            <input className={css.input} type="text" placeholder="Title" />
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
  );
}

export default AddColumnModal;
