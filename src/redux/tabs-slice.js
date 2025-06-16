import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "Tab",
  initialState: {
    value: "tab1"
  },
  reducers: {
    activeTab: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { activeTab } = tabSlice.actions;

export const selectTab = (state) => state.tab.value;

export default tabSlice.reducer;
