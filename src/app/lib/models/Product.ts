import mongoose, { Document, Schema, Model } from "mongoose";

// Define the interface for the School document
export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
}

// Define the schema for the School model
const productSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Define and export the School model
const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
