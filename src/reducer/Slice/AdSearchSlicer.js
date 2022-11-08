import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testList: [],
  testDetail: {},
};

export const TestSlice = createSlice({
  name: 'searchCondition',
  initialState,
  reducers: {
    setTestList: (state, action) => {
      state.testList = action.payload;
    },
    setTestDetail: (state, action) => {
      state.testDetail = action.payload;
    },
  },
});

export const { setTestList, setTestDetail } = TestSlice.actions;

export default TestSlice.reducer;
