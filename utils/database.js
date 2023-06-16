import mongoose from "mongoose";

let isConnected = false; // track the connection status

export const connectToDB = async () => {
  //When strict mode is enabled, Mongoose will throw an error if you attempt to query MongoDB with undefined or null values
  mongoose.set("strictQuery", true); // i did not understand
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true, // didn't understatand
      useUnifiedTopology: true, // didn't understatand
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("connectToDB error",error);
  }
};
