import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: `counterslice`,
  initialState: intialState,
  reducers: {
    increamentCount(state, action) {
      state.count = state.count + 1;
    },
    decreamentCount(state, action) {
      state.count = state.count - 1;
    },
  },
});

export const { increamentCount, decreamentCount } = counterSlice.actions;
export default counterSlice.reducer;
