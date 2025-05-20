import express from "express";
import chatCreate from "./chatCreate.js"

const chatIndex = express.Router()

// Create chat
chatIndex.post("/", chatCreate)

export default chatIndex