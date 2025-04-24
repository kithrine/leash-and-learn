import express from "express";
import contactCreate from "./contactCreate.js";
import contactGetAll from "./contactGetAll.js";
import contactDelete from "./contactDelete.js";

const contactIndex = express.Router()

contactIndex.post("/", contactCreate) // Create
contactIndex.get("/", contactGetAll)
// Delete a Contact Us message
contactIndex.delete("/:id", contactDelete);

export default contactIndex