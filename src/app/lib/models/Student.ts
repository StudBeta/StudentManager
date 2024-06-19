import mongoose, { Document, Schema, Model } from "mongoose";

// Define the interface for the Student document
export interface IStudent extends Document {
  student_id: number;
  name: string;
  age: number;
  dob: Date;
  parent_id: number;
  class_id: number;
  teacher_id: number;
}

// Define the schema for the Student model
const studentSchema: Schema = new Schema({
  student_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  parent_id: {
    type: Number,
    required: true,
  },
  class_id: {
    type: Number,
    required: true,
  },
  teacher_id: {
    type: Number,
    required: true,
  },
});

// Define and export the Student model
const Student: Model<IStudent> = mongoose.models.Student || mongoose.model<IStudent>("Student", studentSchema);

export default Student;
