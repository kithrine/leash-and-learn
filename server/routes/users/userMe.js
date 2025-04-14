import jwt from "jsonwebtoken"
import userModel from "../../schemas/userModel.js"

// TODO: Encrypt password before saving to database


const userMe =  async (req, res) => {
  const { token } = req.params
  // console.log("token", token)

  // Validation
  if (
    (!token || token == "")
  ) {
    res.status(500).json({ "message": "User not logged in or information not valid."})
  } 
  else {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    console.log("decoded:", decoded)
    const loggedInUser = await userModel.findOne({ username: decoded.username })
    console.log("loggedInUser", loggedInUser)
    // If user is logged in and token verified
    if (loggedInUser.token.includes(token)) {
      // User logged in
      res.status(200).json({ "success": true, "message": "User logged in.", user: {
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        username: loggedInUser.username,
        email: loggedInUser.email,
        role: loggedInUser.role,
        firstName: loggedInUser.firstName, 
      }, token })
    } else {
      // User not logged in
      res.status(500).json({ "message": "User not logged in or information not valid."})
    }
  }
}

export default userMe
