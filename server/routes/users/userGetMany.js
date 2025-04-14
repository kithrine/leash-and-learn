import userModel from "../../schemas/userModel.js"

const userGetMany = async (req, res) => {
  const { userType } = req.params
  const userList = await userModel.find({ role: userType})
  console.log("userList", userList)
  res.status(200).json({ "success": true, users: userList })

}

export default userGetMany
