import trainingClassModel from "./trainingClassModel.js";

const trainingClassGetOne = async (req, res) => {
    const { id } = req.params;
    let trainingClass = []

    trainingClass = await trainingClassModel.findOne({ _id: id })
    // console.log("server: trainingClass", trainingClass)
    
    if (trainingClass.length === 0) {
        return res.status(404).send('Training Class not found');
      }
  
    res.status(200).json({"success": true, "trainingClass": trainingClass});

}

export default trainingClassGetOne
