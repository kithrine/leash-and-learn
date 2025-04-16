import userModel from "./userModel.js"

const userGetAll = async (req, res) => {
  const users = await userModel.find()
  // console.log("userList", userList)
  res.status(200).json({ "success": true, "users": users })

}

export default userGetAll
