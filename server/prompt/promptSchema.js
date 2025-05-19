import mongoose from "mongoose";

const { Schema } = mongoose

const promptSchema = new Schema({
  question: String,
  answer: String,
  model: String,
  date: { type: Date, default: Date.now }
});

export default promptSchema;

