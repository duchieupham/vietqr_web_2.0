import { createSlice } from '@reduxjs/toolkit';
import { set } from 'lodash-es';

const initialState = {
  isExpanded: false,
  searchQuery: '',
  contexts: [],
  isNoContext: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsExpanded: (state, action) => {
      state.isExpanded = action.payload;
    },
    getIsExpanded: (state) => state.isExpanded,
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    getSearchQuery: (state) => state.searchQuery,
    setContexts: (state, action) => {
      state.contexts = action.payload;
    },
    getContexts: (state) => state.contexts,
    setIsNoContext: (state, action) => {
      state.isNoContext = action.payload;
    },
  },
});

export const { setIsExpanded, getIsExpanded } = searchSlice.actions;

export default searchSlice.reducer;
