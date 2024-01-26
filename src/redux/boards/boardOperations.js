import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

/* -----  -----  Boards -----  -----  */

export const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('/boards');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoards',
  async (data, thunkApi) => {
    try {
      await axios.post('/boards', data);
      thunkApi.dispatch(getBoards());
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/getBoardById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/boards/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ id, data }, thunkAPI) => {
    try {
      await axios.put(`/boards/${id}`, data);
      thunkAPI.dispatch(getBoards());
      thunkAPI.dispatch(getBoardById(id));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/boards/${id}`);
      thunkAPI.dispatch(getBoards());
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterBoardCards = createAsyncThunk(
  'boards/filterBoards',
  async ({ boardId, priority }, thunkAPI) => {
    try {
      const res = await axios.get(`/filter/${boardId}/${priority}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* -----  -----  Columns -----  -----  */

export const addColumn = createAsyncThunk(
  'column/addColumn',
  async ({ boardId, data }, thunkAPI) => {
    try {
      const res = await axios.post(`/column/${boardId}`, data);
      thunkAPI.dispatch(getBoardById(res.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'column/updateColumn',
  async ({ boardId, id, data }, thunkAPI) => {
    try {
      const res = await axios.put(`/column/${boardId}`, data);
      thunkAPI.dispatch(getBoardById(res.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'column/deleteColumn',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const res = await axios.delete(`/column/${boardId}`, {
        data: { columnId },
      });
      thunkAPI.dispatch(getBoardById(res.data.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// board: {
//   _id,
//     title,
//     icon,
//     background,
//     filter,
//     owner,
//     columns: {
//     title,
//       _id,
//       cards: {
//       title,
//         text,
//         priority,
//         deadline,
//         owner,
//         _id
//       },
//     },
// }
