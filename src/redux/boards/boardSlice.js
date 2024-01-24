import { createSlice } from '@reduxjs/toolkit';

import {
  addBoard,
  deleteBoard,
  getBoardById,
  getBoards,
  updateBoard,
} from './boardOperations';

const initialState = {
  boardsList: [],
  activeBoard: {},
  isLoading: false,
  error: null,
};

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
        state.activeBoard = {};
      })
      .addCase(getBoards.pending, handlePending)
      .addCase(getBoards.rejected, handleRejected)
      .addCase(getBoardById.pending, handlePending)
      .addCase(getBoardById.rejected, handleRejected)
      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.rejected, handleRejected)
      .addCase(updateBoard.pending, handlePending)
      .addCase(updateBoard.rejected, handleRejected)
      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.rejected, handleRejected);
  },
});

export const { clearError, updateActiveBoard } = boardSlice.actions;

export default boardSlice.reducer;
