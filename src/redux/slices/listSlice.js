import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setList } = listSlice.actions;

export default listSlice.reducer;
