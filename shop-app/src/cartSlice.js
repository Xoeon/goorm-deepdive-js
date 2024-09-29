import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from './utils/localStorage';

const CART_KEY = 'cartItems';

const initialState = {
  items: loadState(CART_KEY) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveState(CART_KEY, state.items);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveState(CART_KEY, state.items);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      saveState(CART_KEY, state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveState(CART_KEY, state.items);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
