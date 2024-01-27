export const selectBoardsList = state => state.boards.activeBoard;

export const selectActiveBoard = state => state.boards.activeBoard;

export const selectBoardsError = state => state.boards.error;

export const selectIsBoardsLoading = state =>
  state.boards && state.boards.isLoading;
// Verifică dacă obiectul este definit înainte de a accesa proprietatea

// ----- coloane -----
export const selectColumnsList = state => state.columns.columnsList;

export const selectActiveColumn = state => state.columns.activeColumn;

export const selectColumnsError = state => state.columns.error;

export const selectIsColumnsLoading = state => state.columns.isLoading;
