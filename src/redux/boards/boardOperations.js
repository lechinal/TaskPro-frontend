// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4000/';

// /* -----  -----  Boards -----  -----  */

// export const getBoards = createAsyncThunk(
//   'boards/getBoards',
//   async (_, thunkApi) => {
//     try {
//       const res = await axios.get('/boards');
//       return res.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const addBoard = createAsyncThunk(
//   'boards/addBoards',
//   async (data, thunkApi) => {
//     try {
//       await axios.post('/', data);
//       thunkApi.dispatch(getBoards());
//       return;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const getBoardById = createAsyncThunk(
//   'boards/getBoardById',
//   async (id, thunkAPI) => {
//     try {
//       const res = await axios.get(`/boards/${id}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateBoard = createAsyncThunk(
//   'boards/updateBoard',
//   async ({ id, data }, thunkAPI) => {
//     try {
//       await axios.put(`/boards/${id}`, data);
//       thunkAPI.dispatch(getBoards());
//       thunkAPI.dispatch(getBoardById(id));
//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteBoard = createAsyncThunk(
//   'boards/deleteBoard',
//   async (id, thunkAPI) => {
//     try {
//       await axios.delete(`/boards/${id}`);
//       thunkAPI.dispatch(getBoards());
//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const filterBoardCards = createAsyncThunk(
//   'boards/filterBoards',
//   async ({ boardId, priority }, thunkAPI) => {
//     try {
//       const res = await axios.get(`/api/filter/${boardId}/${priority}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// /* -----  -----  Columns -----  -----  */

// export const addColumn = createAsyncThunk(
//   'column/addColumn',
//   async (data, thunkAPI) => {
//     try {
//       const res = await axios.post(`/column/${data.boardId}`, data);
//       thunkAPI.dispatch(getBoardById(res.data.board));
//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateColumn = createAsyncThunk(
//   'column/updateColumn',
//   async ([id, data], thunkAPI) => {
//     try {
//       const res = await axios.put(`/column`, data);
//       thunkAPI.dispatch(getBoardById(res.data.board));
//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteColumn = createAsyncThunk(
//   'column/deleteColumn',
//   async (data, thunkAPI) => {
//     try {
//       const res = await axios.delete(`/column`, { data });
//       thunkAPI.dispatch(getBoardById(res.data.data.board));
//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
