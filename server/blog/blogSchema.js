import mongoose from "mongoose";
import { Schema } from "mongoose";

const blogSchema = new Schema({
  title: String,
  authorFullName: String,
  authorTitle: String,
  avatar: String,
  category: String,
  subCategory: String,
  readTime: String,
  body: String,
  coverPhoto: String,
  date: { type: Date, default: Date.now },
  comments: [{
    firstName: String,
    lastName: String,
    username: String,
    comment: String,
    timestamp: { type: Date, default: Date.now}
  }]
});

export default blogSchema;

