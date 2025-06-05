import express from "express"
import trainingClassCreate from "./trainingClassCreate.js"
import trainingClassGetAll from "./trainingClassGetAll.js"
import trainingClassGetMany from "./trainingClassGetMany.js"
import trainingClassGetOne from "./trainingClassGetOne.js"
import trainingClassUpdate from "./trainingClassUpdate.js"
import trainingClassSessionUpdate from "./trainingClassSessionUpdate.js"
import trainingClassSessionDelete from "./trainingClassSessionDelete.js"
import trainingClassSessionCreate from "./trainingClassSessionCreate.js"
import trainingClassGetManyByType from "./trainingClassGetManyByType.js"
import trainingClassEnroll from "./trainingClassEnroll.js"

const trainingClassIndex = express.Router()

trainingClassIndex.post("/", trainingClassCreate)
trainingClassIndex.get("/", trainingClassGetAll)
trainingClassIndex.get("/:username?", trainingClassGetMany)
trainingClassIndex.get("/list/type/:type", trainingClassGetManyByType)
trainingClassIndex.get("/detail/:id", trainingClassGetOne)
trainingClassIndex.put("/:trainingClassId", trainingClassUpdate)
trainingClassIndex.post("/:trainingClassId/sessions", trainingClassSessionCreate)
trainingClassIndex.put("/:trainingClassId/sessions/:sessionId", trainingClassSessionUpdate)
trainingClassIndex.delete("/:trainingClassId/sessions/:sessionId", trainingClassSessionDelete)
trainingClassIndex.post("/detail/:selectedClass/customers", trainingClassEnroll)


export default trainingClassIndex