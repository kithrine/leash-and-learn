import { Schema } from "mongoose";

const blogSchema = new Schema({
  userId: String,
  title: String,
  authorFirstName: String,
  authorLastName: String,
  authorTitle: String,
  avatar: String,
  category: String,
  subCategory: String,
  readTime: String,
  body: String,
  coverPhoto: String,
  date: { type: Date, default: Date.now },
  comments: [{
    userId: String,
    firstName: String,
    lastName: String,
    username: String,
    avatar: String,
    comment: String,
    timestamp: { type: Date, default: Date.now}
  }]
});

export default blogSchema;

