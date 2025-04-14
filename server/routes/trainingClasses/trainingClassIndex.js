import express from "express"
import trainingClassCreate from "./trainingClassCreate.js"
import trainingClassGetAll from "./trainingClassGetAll.js"
import trainingClassGetMany from "./trainingClassGetMany.js"
import trainingClassGetOne from "./trainingClassGetOne.js"
import trainingClassUpdate from "./trainingClassUpdate.js"
import trainingClassSessionUpdate from "./trainingClassSessionUpdate.js"
import trainingClassSessionDelete from "./trainingClassSessionDelete.js"

const trainingClassIndex = express.Router()

trainingClassIndex.post("/", trainingClassCreate)
trainingClassIndex.get("/", trainingClassGetAll)
trainingClassIndex.get("/:username?", trainingClassGetMany)
trainingClassIndex.get("/detail/:id", trainingClassGetOne)
trainingClassIndex.put("/:trainingClassId", trainingClassUpdate)
trainingClassIndex.put("/:trainingClassId/sessions/:sessionId", trainingClassSessionUpdate)
trainingClassIndex.delete("/:trainingClassId/sessions/:sessionId", trainingClassSessionDelete)

export default trainingClassIndex