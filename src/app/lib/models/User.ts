import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  userName: string;
  password: string;
  role: string;
  createdAt: string;
}

const userSchema: Schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  createdAt: {
    type: DateTime,
    required: true,
  },
});

const user = mongoose.model<IUser>("user", userSchema);

export default user;
