import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB at ${process.env.MONGODB_URI}`);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    // Additional error handling can be implemented here if needed
  }
}

export default dbConnect;
