import mongoose from "mongoose";

const Schema = mongoose.Schema

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  date: { type: Date, default: Date.now },
  subject: String,
  message: String
})


export default contactSchema