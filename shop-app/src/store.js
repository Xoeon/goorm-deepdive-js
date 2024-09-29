import { configureStore } from '@reduxjs/toolkit';
import clothReducer from './clothSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    selectedCloth: clothReducer,
    cart: cartReducer,
  },
});

export default store;
