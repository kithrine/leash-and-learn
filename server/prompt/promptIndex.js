import express from "express";
import promptCreate from "./promptCreate.js"

const promptIndex = express.Router()

// Create prompt
promptIndex.post("/", promptCreate)

export default promptIndex