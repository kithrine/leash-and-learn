import mongoose from "mongoose";
import trainingClassSchema from "./trainingClassSchema.js";

trainingClassSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  }
})

const trainingClassModel = mongoose.model("trainingClasses", trainingClassSchema)

export default trainingClassModel
