import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common['Authorization'];
}

/* -----  -----  Boards -----  -----  */

export const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/board');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoards',
  async (board, thunkAPI) => {
    const { title, background } = board;
    try {
      const response = await axios.post('/board', { title, background });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/getBoardById',
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`/board/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ boardId, title, background }, thunkAPI) => {
    try {
      const response = await axios.put(`/board/${boardId}`, {
        title,
        background,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/board/${boardId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// -----  -----  Columns -----  -----  //

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

// -----  -----  Cards -----  -----  //

// export const addCard = createAsyncThunk(
//   'cards/addCard',
//   async ({ boardId, columnId, data }, thunkAPI) => {
//     try {
//       const res = await axios.post(`/card/${boardId}/${columnId}`, data);
//       thunkAPI.dispatch(getBoardById(res.data.board));
//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateCard = createAsyncThunk(
//   'cards/updateCard',
//   async ({ boardId, columnId, cardId, data }, thunkAPI) => {
//     try {
//       const res = await axios.put(
//         `/card/${boardId}/${columnId}/${cardId}`,
//         data
//       );
//       thunkAPI.dispatch(getBoardById(res.data.board));
//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async ({ boardId, columnId, cardId }, thunkAPI) => {
    try {
      const res = await axios.delete(`/card/${boardId}/${columnId}/${cardId}`);
      thunkAPI.dispatch(getBoardById(res.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ----- ----- filters ----- ----- //

// export const filterColumnCards = createAsyncThunk(
//   'columns/filterColumnCards',
//   async ({ boardId, columnId, priority }, thunkAPI) => {
//     try {
//       const res = await axios.get(`/filter/${boardId}/${columnId}/${priority}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const filterBoardCards = createAsyncThunk(
//   'boards/filterBoardCards',
//   async ({ boardId, priority }, thunkAPI) => {
//     try {
//       const res = await axios.get(`/filter/${boardId}/${priority}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
