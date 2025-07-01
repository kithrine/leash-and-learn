import userModel from "./userModel.js";

const userGetOne = async (req, res) => {
  const { email } = req.params;
  console.log("user email backend getone", email)
  const user = await userModel.findOne({email});
  res.status(200).json(user);
};

export default userGetOne;
