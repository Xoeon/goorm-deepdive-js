import { configureStore } from '@reduxjs/toolkit';
import clothReducer from './clothSlice';

const store = configureStore({
  reducer: {
    selectedCloth: clothReducer,
  },
});

export default store;
