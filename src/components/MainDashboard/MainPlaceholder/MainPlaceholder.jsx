import React from 'react';
import { useState } from 'react';
import css from './MainPlaceholder.module.css';

import NewBoardMainModal from './NewBoardMainModal/NewBoardMainModal';

function MainPlaceholder() {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(state => !state);

  return (
    <div className={css.mainDashboardContainer}>
      <p className={css.mainDashboardParagraph}>
        Before starting your project, it is essential{' '}
        <button className={css.createBoard} type="button" onClick={toggleModal}>
          to create a board
        </button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
      {openModal && <NewBoardMainModal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default MainPlaceholder;
