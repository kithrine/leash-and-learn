import trainingClassModel from "../../schemas/trainingClassModel.js";

const trainingClassUpdate = async (req, res) => {
  const { trainingClassId } = req.params;
  const { trainingClassType, trainer, trainingClassName, trainingClassDescription, startDate, endDate } = req.body
  // const { trainingClassEditForm } = req.body;

  // Validation
  if (
    (!trainingClassType || trainingClassType == "") ||
    (!trainer) ||
    (!trainingClassName || trainingClassName == "") ||
    (!trainingClassDescription || trainingClassDescription == "") ||
    (!startDate || startDate == "") ||
    (!endDate || endDate == "")
  ) {
    res.status(500).json({ message: "Training Class information not valid." });
  } else {
    const newDate = new Date()
    const updatedTrainingClass = await trainingClassModel.findOneAndUpdate({ _id: trainingClassId } ,{trainingClassType, trainer, trainingClassName, trainingClassDescription, startDate, endDate})


    // const updatedSessionTrainingClass =
    //   await trainingClassModel.findOneAndUpdate(
    //     { id: trainingClassId },
    //     trainingClassEditForm
    //   );
    console.log("updatedTrainingClass", updatedTrainingClass);
    res.status(200).json({ success: true, message: "Training Class trainingClass updated." });
  }
};

export default trainingClassUpdate;
