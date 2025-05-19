import mongoose from "mongoose";
import promptSchema from "./promptSchema.js";

promptSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const promptModel = mongoose.model("Prompt", promptSchema)

export default promptModel
