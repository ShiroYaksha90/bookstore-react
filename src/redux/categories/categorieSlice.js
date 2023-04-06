import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'Under construction',
};

const categorieSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under constraction',
    }),
  },
});

export const { checkStatus } = categorieSlice.actions;
export default categorieSlice.reducer;
