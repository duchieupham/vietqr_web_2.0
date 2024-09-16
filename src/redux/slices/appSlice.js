import { createSlice } from '@reduxjs/toolkit';
import { DASHBOARD_TYPE } from '~/constants/dashboard';

const initialState = {
  dashboardType: DASHBOARD_TYPE[0].id, // home-dashboard
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDashboardType: (state, action) => {
      state.dashboardType = action.payload;
    },
  },
});

export const { setDashboardType } = appSlice.actions;

export default appSlice.reducer;
