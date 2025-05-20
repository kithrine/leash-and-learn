import mongoose from "mongoose";

const { Schema } = mongoose

const chatSchema = new Schema({
  prompt: String,
  answer: String,
  model: String,
  date: { type: Date, default: Date.now }
});

export default chatSchema;

