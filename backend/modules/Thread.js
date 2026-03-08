import mongoose, { Schema } from "mongoose";

const MessagesSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "assistant"],
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  timestamps: {
    type: Date,
    default: Date.now(),
  },
});

const ThreadSchema = new mongoose.Schema({
  threadId: {
    type: String,
    required: true,
    unique: true,
  },

  title: {
    type: String,
    default: "new chat",
  },

  message: { MessagesSchema },

  createdAt: {
    type: Date,
    defualt: Date.now(),
  },

  updatedAt: {
    type: Date,
    defualt: Date.now(),
  },
});

export default mongoose.model("Thread", ThreadSchema);
