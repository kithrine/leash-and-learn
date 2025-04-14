import userModel from "../../schemas/userModel.js"

const userGetAll = async (req, res) => {
  const userList = await userModel.find()
  // console.log("userList", userList)
  res.status(200).json({ "success": true, users: userList })

}

export default userGetAll
