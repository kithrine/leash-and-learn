import mongoose from "mongoose";
import chatSchema from "./chatSchema.js";

chatSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const chatModel = mongoose.model("Chat", chatSchema)

export default chatModel
