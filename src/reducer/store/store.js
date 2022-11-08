import { configureStore } from '@reduxjs/toolkit';
import dateReducer from '../Slice/dateSlice';
import testReducer from '../Slice/AdSearchSlicer';

export const store = configureStore({
  reducer: { dateReducer, testData: testReducer },
});
console.log(store.getState());
