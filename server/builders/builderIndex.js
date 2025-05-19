import express from "express"
import builderCreate from "./builderCreate.js"
import builderGetMany from "./builderGetMany.js"
import builderUpdate from "./builderUpdate.js"

const builderIndex = express.Router()

builderIndex.post("/", builderCreate)
builderIndex.get("/", builderGetMany)
builderIndex.put("/", builderUpdate)

export default builderIndex