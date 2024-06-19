import mongoose, { Document, Schema } from "mongoose";

export interface IStudent extends Document {
  studentName: string;
  dob: string;
}

const schoolSchema: Schema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
  },
});

const student = mongoose.model<IStudent>("student", studentSchema);

export default student;
