import jwt from "jsonwebtoken"
import userModel from "../../schemas/userModel.js"

// TODO: Encrypt password before saving to database


const userLogout =  async (req, res) => {
  // Get token from header
  const { token } = req.params
  // If token
  if (
    (!token || token == "")
  ) {
    res.status(500).json({ "message": "User information not valid."})
  } 
  else {
    // Logout user, remove token
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const logoutUser = await userModel.findOne({ username: decoded.username })
    console.log("logoutUser", logoutUser)
    logoutUser.token = []
    await logoutUser.save()
    res.status(200).json({ "success": true, "message": "User logged out."})
  }
}

export default userLogout
