import { createSlice } from '@reduxjs/toolkit';
import { DASHBOARD_MODE, DASHBOARD_TYPE } from '~/constants/dashboard';

export const appStates = {
  dashboardType: DASHBOARD_TYPE[0].id, // home-dashboard
  dashboardMode: DASHBOARD_MODE.VERTICAL,
};

export const appSlice = createSlice({
  name: 'app',
  initialState: appStates,
  reducers: {
    setDashboardType: (state, action) => {
      state.dashboardType = action.payload;
    },
    setDashboardMode: (state, action) => {
      state.dashboardMode = action.payload;
    },
  },
});

export const { setDashboardType, setDashboardMode } = appSlice.actions;

export default appSlice.reducer;
