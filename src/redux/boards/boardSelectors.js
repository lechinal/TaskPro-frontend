export const selectBoardsList = state => state.boards.boardsList;

export const selectActiveBoard = state => state.boards.activeBoard;

// export const selectActiveBoard = state => {
//   console.log('Active board:', state.boards.activeBoard);
//   return state.boards.activeBoard;
// };

export const selectBoardsError = state => state.boards.error;

export const selectIsBoardsLoading = state => state.boards.isLoading;

// ----- coloane -----
export const selectColumnsList = state => state.columns.columnsList;

export const selectActiveColumn = state => state.columns.activeColumn;

export const selectColumnsError = state => state.columns.error;

export const selectIsColumnsLoading = state => state.columns.isLoading;
