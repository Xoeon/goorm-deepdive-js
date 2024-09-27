import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCloth: null,
};

const clothSlice = createSlice({
  name: 'cloth',
  initialState,
  reducers: {
    setSelectedCloth: (state, action) => {
      state.selectedCloth = action.payload;
    },
  },
});

export const { setSelectedCloth } = clothSlice.actions;
export default clothSlice.reducer;
