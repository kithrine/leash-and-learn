import express from "express"
import userCreate from "./userCreate.js"
import userLogin from "./userLogin.js"
import userMe from "./userMe.js"
import userLogout from "./userLogout.js"
import userGetAll from "./userGetAll.js"
import userGetMany from "./userGetMany.js"
import userUpdate from "./userUpdate.js"
import userGetOne from "./userGetOne.js"

const userIndex = express.Router()

userIndex.post("/", userCreate)
userIndex.post("/login", userLogin)
userIndex.put("/:id", userUpdate)
userIndex.get("/me/:token", userMe)
userIndex.get("/logout/:token", userLogout)
userIndex.get("/list", userGetAll)
userIndex.get("/user/:email", userGetOne)
userIndex.get("/list/:userType", userGetMany)


export default userIndex