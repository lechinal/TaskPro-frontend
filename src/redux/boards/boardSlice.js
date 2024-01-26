import { createSlice } from '@reduxjs/toolkit';

import {
  addBoard,
  deleteBoard,
  getBoardById,
  getBoards,
  updateBoard,
  addColumn,
  deleteColumn,
  updateColumn,
} from './boardOperations';

const initialState = {
  boardsList: [],
  activeBoard: {},
  isLoading: false,
  error: null,
};

const handlePending = (state, action) => {
  state.isLoading = true;
  return state;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  return state;
};

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    updateActiveBoard(state, action) {
      state.activeBoard = action.payload;
    },

    deleteBoardFulfilled(state, action) {
      state.activeBoard = {};
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBoards.fulfilled, (state, action) => {
        state.boardsList = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.activeBoard = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        boardSlice.caseReducers.deleteBoardFulfilled(state, action);
      })
      .addCase(getBoards.pending, handlePending)
      .addCase(getBoards.rejected, handleRejected)
      .addCase(getBoardById.pending, handlePending)
      .addCase(getBoardById.rejected, handleRejected)
      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.fulfilled, (state, action) => {
        state.activeBoard = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBoard.rejected, handleRejected)
      .addCase(updateBoard.pending, handlePending)
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.activeBoard = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateBoard.rejected, handleRejected)
      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.rejected, handleRejected)

      // ----- coloane -----

      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.activeBoard = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addColumn.rejected, handleRejected)
      .addCase(updateColumn.pending, handlePending)
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.activeBoard = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateColumn.rejected, handleRejected)
      .addCase(deleteColumn.pending, handlePending)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.activeBoard = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteColumn.rejected, handleRejected);
  },
});

export const { clearError, updateActiveBoard, deleteBoardFulfilled } =
  boardSlice.actions;

export default boardSlice.reducer;
