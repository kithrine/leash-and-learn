import trainingClassModel from "./trainingClassModel.js"

const trainingClassGetMany =  async (req, res) => {

  const { username } = req.params
  console.log("username", username)
  // Validation
  // ** ONE THAT WORKS FOR TRAINERS! **
  if (!username || username === "") {
    res.status(500).json({ "message": "Training Class information not valid."})
  } 
  else {
    const getTrainingClasses = await trainingClassModel.find({ $or: [{"users.username": username}, {"trainer.username": username }] })
    console.log("getTrainingClasses", getTrainingClasses)
    res.status(200).json({ "success": true, "trainingClasses": getTrainingClasses })
  }




  // if (!username || username === "") {
  //   res.status(500).json({ "message": "Training Class information not valid."})
  // } 
  // else {


  // ** ONE THAT HAD BEFORE THAT MR.DEAN DID WITH ME... need to add trainers for it?? Even though it does not work for kit, the BM **
  // if (!username || username === "") {
  //   console.log("if")
  //   const getTrainingClasses = await trainingClassModel.find()
  //   console.log("getTrainingClasses", getTrainingClasses)
  //   res.status(200).json({ "success": true, "trainingClasses": getTrainingClasses })
  // } else {
  //   console.log("else")
  //   // FOR TRAINERS: .find({ "trainer.username": username })
  //   const getTrainingClasses = await trainingClassModel.find({ $or: [{"trainer.username": username}, {"users.username": username }] })
  //   console.log("getTrainingClasses", getTrainingClasses)
  //   res.status(200).json({ "success": true, "trainingClasses": getTrainingClasses })
  // }


  // }
}

export default trainingClassGetMany
