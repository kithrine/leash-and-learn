import userModel from "./userModel.js";

const dogDelete = async (req, res) => {
  const { userId, dogId } = req.params
  console.log("DOG DELETE req.body userId and dogId", userId, dogId)
  // Validation
  if (
    // (!userId || userId == "") ||
    (!dogId || dogId == "")
  ) {
    res.status(500).json({ message: "Dog information not valid." });
  } else {
    const deleteDog = await userModel.updateOne({ _id: userId }, { $pull: { dogs: { _id: dogId } }});
    const getDog = await userModel.findOne({  _id: userId })
    console.log("deleteDog", deleteDog);
    console.log("!!!!!!!!!!!!!!!!!!getDog", getDog);

    res.status(200).json({ success: true, message: "Dog deleted.", user: getDog });
  }
};

export default dogDelete;