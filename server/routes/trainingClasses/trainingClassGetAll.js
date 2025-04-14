import trainingClassModel from "../../schemas/trainingClassModel.js"

const trainingClassGetAll =  async (req, res) => {
  // ** ONE THAT WORKS FOR BUSINESS MANAGER **
    const getTrainingClasses = await trainingClassModel.find()
    console.log("getTrainingClasses", getTrainingClasses)
    res.status(200).json({ "success": true, "trainingClasses": getTrainingClasses })
  
}

export default trainingClassGetAll