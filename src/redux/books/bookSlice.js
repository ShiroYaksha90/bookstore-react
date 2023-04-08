import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zPtgZBFsAPMIETFrPiCN/books';
const initialState = {
  books: [],
};

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed');
  }
});

export const postBook = createAsyncThunk('books/postBook', async (data) => {
  try {
    const response = await axios.post(url, data);
    return {
      message: response.data,
      data,
    };
  } catch (error) {
    return error;
  }
});

export const delBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return id;
  } catch (error) {
    return error;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookslist = state.books.filter((book) => book.item_id !== action.payload);
      return { ...state, books: bookslist };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const booksObj = action.payload;
        const bookIdList = Object.keys(booksObj);
        const books = bookIdList.map((itemId) => ({
          item_id: itemId,
          title: booksObj[itemId][0].title,
          author: booksObj[itemId][0].author,
          category: booksObj[itemId][0].category,
        }));
        return { ...state, books };
      })
      .addCase(postBook.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.books = [action.payload.data, ...IsFulfilled.books];
      })
      .addCase(delBook.fulfilled, (state, action) => {
        const filteredBooks = state.books.filter((book) => book.item_id !== action.payload);
        return { ...state, books: filteredBooks };
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
