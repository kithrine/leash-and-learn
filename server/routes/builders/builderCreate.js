import builderModel from "../../schemas/builderModel.js"

const builderCreate =  async (req, res) => {
  const { trainingClassType, sessions } = req.body

  // Validation
  if (
    (!trainingClassType || trainingClassType == "") 
    // (!sessions || sessions.length === 0)
  ) {
    res.status(500).json({ "message": "Training Class builder information not valid."})
  } 
  else {
    const newSessionBuilder = await builderModel.create({ trainingClassType, sessions })
    console.log("newSessionBuilder", newSessionBuilder)
    res.status(200).json({ "success": true, "message": "Training Class builder created."})
  }
}

export default builderCreate
