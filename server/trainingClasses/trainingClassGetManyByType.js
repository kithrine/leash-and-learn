import trainingClassModel from "./trainingClassModel.js"

const trainingClassGetManyByType =  async (req, res) => {

  const { type } = req.params
  console.log("type in trainingClassGetManyByType", type)
  // Validation
  // ** ONE THAT WORKS FOR TRAINERS! **
  if (!type || type === "") {
    res.status(500).json({ "message": "Enrollment information not valid."})
  } 
  else {
    const getTrainingClassesByType = await trainingClassModel.find({ trainingClassType: type })
    console.log("getTrainingClassesByType", getTrainingClassesByType)
    res.status(200).json({ "success": true, "trainingClasses": getTrainingClassesByType })
  }
}

export default trainingClassGetManyByType
