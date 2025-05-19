import userModel from "./userModel.js";

const userUpdate = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, avatar, email, username, phoneNumber, address, city, state, zipCode } = req.body

  console.log("userUpdate", firstName, lastName, email, username, avatar, phoneNumber, address, city, state, zipCode)
  
  // const { userEditForm } = req.body;

  // Validation
  if (
    (!email || email == "") ||
    (!username || username == "")
    // (!address || address == "") ||
    // (!phoneNumber || phoneNumber == "") ||
    // (!city || city == "")
  ) {
    res.status(500).json({ message: "User information not valid." });
  } else {
    const updatedUser = await userModel.findOneAndUpdate({ _id: id }, { firstName, lastName, email, username, avatar, phoneNumber, address, city, state, zipCode }, { new: true })

    console.log("updatedUser", updatedUser);
    res.status(200).json({ success: true, message: "User information updated.", user: updatedUser });
  }
};

export default userUpdate;


// firstName: {
//   type: String,
//   default: ""
// },
// lastName: {
//   type: String,
//   default: ""
// },
// email: {
//   type: String,
//   default: ""
// },
// username: {
//   type: String,
//   default: ""
// },
// password: {
//   type: String,
//   default: ""
// },
// role: [ String ],
// avatar: {
//   type: String,
//   default: ""
// },
// phoneNumber: {
//   type: String,
//   default: ""
// },
// address: {
//   type: String,
//   default: ""
// },
// city: {
//   type: String,
//   default: ""
// },
// state: {
//   type: String,
//   default: ""
// },
// zipCode: {
//   type: String,
//   default: ""
// },
// dogs: [{
//   name: String,
//   age: String,
//   breed: String,
//   gender: String,
//   weight: String,
//   photo: String,
//   size: String,
//   behavioralIssues: String,
//   medicalConditions: String,
//   trainingGoals: String,
//   additionalNotes: String
// }],
// token: {
//   type: [ String ]
// }