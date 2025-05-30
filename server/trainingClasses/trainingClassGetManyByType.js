import trainingClassModel from "./trainingClassModel.js"

const trainingClassGetManyByType =  async (req, res) => {

  const { trainingClassType } = req.params // was username
  console.log("trainingClassType in trainingClassGetManyByType", trainingClassType)
  // Validation
  // ** ONE THAT WORKS FOR TRAINERS! **
  if (!trainingClassType || trainingClassType === "") {
    res.status(500).json({ "message": "Enrollment information not valid."})
  } 
  else {
    const getTrainingClasses = await trainingClassModel.find({ trainingClasses: trainingClassType })
    console.log("getTrainingClasses", getTrainingClasses)
    res.status(200).json({ "success": true, "trainingClasses": getTrainingClasses })
  }
}

export default trainingClassGetManyByType
