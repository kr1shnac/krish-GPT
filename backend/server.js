import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import chatRouter from "./routers/chat.js";

const app = express();
const PORT = 8080;

app.use("/api", chatRouter);

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
  connectDB();
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to DataBase");
  } catch (err) {
    console.log("Failed to connect with DB", err);
  }
};
