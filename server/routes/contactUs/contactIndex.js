import express from "express";
import contactCreate from "./contactCreate.js";
import contactGetAll from "./contactGetAll.js";

const contactIndex = express.Router()

contactIndex.post("/", contactCreate) // Create
contactIndex.get("/", contactGetAll)

export default contactIndex