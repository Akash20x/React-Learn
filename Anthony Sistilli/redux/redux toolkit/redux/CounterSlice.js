import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => ({ ...state, count: state.count - 1 }),
    test: (state, action) => {
      const { testValue } = action.payload;
      console.log(testValue);
    }
  }
});

export const { increment, decrement, test } = counterSlice.actions;

export default counterSlice.reducer;
