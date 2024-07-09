import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  barcodeEAN_13: null,
};

const barcodeSlice = createSlice({
  name: 'barcode',
  initialState,
  reducers: {
    searchThrough: (state, action) => {
      const { barcode } = action.payload;
      state.barcodeEAN_13 = barcode; // Use single equals sign for assignment
    }
  }
});

export const { searchThrough } = barcodeSlice.actions;
export default barcodeSlice.reducer;
