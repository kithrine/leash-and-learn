import * as argon2 from "argon2"
import userModel from "./userModel.js"

// TODO: Encrypt password before saving to database

const userCreate =  async (req, res) => {
  const { firstName, lastName, email, username, password, role } = req.body
  // Validation
  if (
    (!firstName || firstName == "") ||
    (!lastName || lastName == "") ||
    (!email || email == "") ||
    (!username || username == "") ||
    (!password || password == "") 
    // (!role || role == "")
  ) {
    res.status(500).json({ "message": "User information not valid."})
  } 
  else {
    const hashedPassword = await argon2.hash(password)
    // console.log("hashedPassword", hashedPassword)
    const newUser = await userModel.create({ firstName, lastName, email, username, password: hashedPassword, role: [ role ] })
    console.log("newUser", newUser)
    res.status(200).json({ "success": true, "message": "User created."})
  }
}

export default userCreate
