import mongoose, { Document, Schema, Model } from "mongoose";

// Define the interface for the School document
export interface ISchool extends Document {
  school_id: number;
  name: string;
  address: string;
  government_regId: number;
}

// Define the schema for the School model
const schoolSchema: Schema = new Schema({
  school_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  government_regId: {
    type: Number,
    required: true,
  },
});

// Define and export the School model
const School: Model<ISchool> = mongoose.models.School || mongoose.model<ISchool>("School", schoolSchema);

export default School;
