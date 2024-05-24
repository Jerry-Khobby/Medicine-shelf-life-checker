import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  manufacturingDate: {
    type: Date,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  quantityInStock: {
    type: Number,
    required: true,
  },
  shelfNumber: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: false,
  },
  barcodeEAN_13: {
    type: String,
    required: false,
  },
  barcodeUPC_A: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

// Create or retrieve the Medicine model
const Medicine = mongoose.models.Medicine || mongoose.model("Medicine", medicineSchema);

export default Medicine;
