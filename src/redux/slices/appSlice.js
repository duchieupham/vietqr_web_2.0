import { createSlice } from '@reduxjs/toolkit';
import { DASHBOARD_TYPE } from '~/constants/dashboard';

const defaultDashboardType = DASHBOARD_TYPE.find((type) => type.id === 'home');
const initialState = {
  dashboardType: defaultDashboardType || null,
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
