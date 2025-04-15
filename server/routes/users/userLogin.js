import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import userModel from "./userModel.js";

// TODO: Create token and store in user.token array
// TODO: Retrun above token on successful login

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  // Validation
  if (!username || username == "" || !password || password == "") {
    res.status(500).json({ message: "User information not valid." });
  } else {
    // console.log("username:", username, "password:", password)
    // Get user by username (without worrying about password)
    const loginUser = await userModel.findOne({ username });
    // If username not found
    if (!loginUser) {
      res
        .status(500)
        .json({ success: false, message: "User information not valid." });
    }
    const isPasswordCorrect = await argon2.verify(loginUser.password, password);
    // If password is incorrect
    if (!isPasswordCorrect) {
      res
        .status(500)
        .json({ success: false, message: "User information not valid." });
    }
    // If user exists and password is correct
    console.log(process.env.SECRET_KEY);
    const key = process.env.SECRET_KEY || "";
    const token = jwt.sign({ username }, key);
    console.log("token:", token);
    loginUser.token.push(token);
    loginUser.save();
    console.log("loginUser:", loginUser);
    const user = {
      firstName: loginUser.firstName,
      lastName: loginUser.lastName,
      username: loginUser.username,
      token: loginUser.token,
      role: loginUser.role,
    };
    res.status(200).json({ success: true, message: "User logged in.", user });
  }
};

export default userLogin;
