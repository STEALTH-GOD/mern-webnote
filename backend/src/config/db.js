import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // try common env names and give a clear error if missing
    const uri =
      process.env.MONGO_URL ||
      process.env.MONGO_URI ||
      process.env.DATABASE_URL;
    if (!uri) {
      console.error(
        "MONGODB URI not found. Set MONGO_URL or MONGO_URI or DATABASE_URL in your .env"
      );
      process.exit(1);
    }

    await mongoose.connect(uri);
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
