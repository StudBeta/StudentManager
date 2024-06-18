import mongoose, { Document, Schema } from "mongoose";

export interface ISchool extends Document {
  schoolName: string;
  description: string;
}

const schoolSchema: Schema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const school = mongoose.model<ISchool>("school", schoolSchema);

export default school;
