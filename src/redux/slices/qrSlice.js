import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qr: {},
};
export const qrSlice = createSlice({
  name: 'qr',
  initialState,
  reducers: {
    setQr: (state, action) => {
      state.qr = action.payload;
    },
    getQr: (state) => state.qr,
  },
});

export const { setQr, getQr } = qrSlice.actions;

export default qrSlice.reducer;
