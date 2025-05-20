import express from "express";
import chatCreate from "./chatCreate.js"
import chatGetMany from "./chatGetMany.js";

const chatIndex = express.Router()

// Create chat
chatIndex.post("/", chatCreate)
chatIndex.get("/:email", chatGetMany)

export default chatIndex