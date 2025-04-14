import builderModel from "../../schemas/builderModel.js"

const builderUpdate =  async (req, res) => {
  const { trainingClassType, trainer } = req.body

  // Validation
  if (
    (!trainingClassType || trainingClassType == "") 
    // (!sessions || sessions.length === 0)
  ) {
    res.status(500).json({ "message": "Training Class builder information not valid."})
  } 
  else {
    const updatedSessionBuilder = await builderModel.findOneAndUpdate({ trainingClassType }, { trainer })
    console.log("updatedSessionBuilder", updatedSessionBuilder)
    res.status(200).json({ "success": true, "message": "Training Class builder updated."})
  }
}

export default builderUpdate
