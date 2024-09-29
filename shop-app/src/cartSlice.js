import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from './utils/localStorage';

const CART_KEY = 'cartItems';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      const { userId } = action.payload;
      state.items = loadState(userId, CART_KEY) || [];
    },
    addItemToCart: (state, action) => {
      const { userId, id, title, image, category, price, quantity } =
        action.payload;

      if (!id || !title) {
        console.error('유효하지 않은 item 정보입니다.');
        return;
      }

      const existingItem = state.items.find((cartItem) => cartItem.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title, image, category, price, quantity });
      }
      saveState(userId, CART_KEY, state.items);
    },
    removeItemFromCart: (state, action) => {
      const { userId, itemId } = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      saveState(userId, CART_KEY, state.items);
    },
    updateItemQuantity: (state, action) => {
      const { userId, id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      saveState(userId, CART_KEY, state.items);
    },
    clearCart: (state, action) => {
      const { userId } = action.payload;
      state.items = [];
      saveState(userId, CART_KEY, state.items);
    },
  },
});

export const {
  initializeCart,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
