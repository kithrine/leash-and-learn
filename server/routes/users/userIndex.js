import express from "express"
import userLogin from "./userLogin.js"
import userLogout from "./userLogout.js"
import userMe from "./userMe.js"
import userGetAll from "./userGetAll.js"
import userGetMany from "./userGetMany.js"
import userGetOne from "./userGetOne.js"
import userCreate from "./userCreate.js"
import userUpdate from "./userUpdate.js"
import dogCreate from "./DogCreate.js"
import dogUpdate from "./DogUpdate.js"

const userIndex = express.Router()

userIndex.post("/login", userLogin)
userIndex.get("/logout/:token", userLogout)
userIndex.get("/me/:token", userMe)
userIndex.get("/list", userGetAll)
userIndex.get("/list/:userType", userGetMany)
userIndex.get("/user/:email", userGetOne)
userIndex.post("/", userCreate)
userIndex.put("/:id", userUpdate)
userIndex.post("/:userId/dogs", dogCreate)
userIndex.put("/:userId/dogs/:dogId", dogUpdate)


export default userIndex