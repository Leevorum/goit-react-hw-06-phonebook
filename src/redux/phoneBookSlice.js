import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { remove, add } = phoneBookSlice.actions;

export default phoneBookSlice.reducer;