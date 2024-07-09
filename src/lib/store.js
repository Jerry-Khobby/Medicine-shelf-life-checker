import { configureStore } from '@reduxjs/toolkit';
import barcodeReducer from './slice'; // Adjust the import path as needed

export const store = configureStore({
  reducer: {
    barcode: barcodeReducer,
  },
});


