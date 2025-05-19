import trainingClassModel from "./trainingClassModel.js";

const trainingClassUpdate = async (req, res) => {
  const { trainingClassId } = req.params;
  const { trainingClassType, trainer, trainingClassName, trainingClassDescription, startDate, endDate } = req.body

  console.log("trainingClassUpdate", trainingClassId, trainingClassType, trainer, trainingClassName, trainingClassDescription, startDate, endDate)
  
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

    const updatedTrainingClass = await trainingClassModel.findOneAndUpdate({ _id: trainingClassId } , { trainingClassType, trainer, trainingClassName, trainingClassDescription, startDate, endDate}, { new: true })

    // const test = await trainingClassModel.find({_id: trainingClassId})
    // console.log("test", test)

    // const updatedTrainingClass = await trainingClassModel.findOneAndUpdate({_id: trainingClassId}, { "$set": { "trainingClass.$": { trainingClassType, trainer, trainingClassName, trainingClassDescription, startDate, endDate }}}, {new: true})

    // const updateSession = await trainingClassModel.findOneAndUpdate(
    //   // { "sessions._id": _id },
    //   { _id: trainingClassId, "sessions._id": _id },
    //   { "$set": { "sessions.$": { sessionName, sessionDescription, sessionType, percentComplete, sessionDate, sessionTime, sessionDuration, activitiesPerformed, customers } } },
    //   { new: true }
    // );

    // const updatedSessionTrainingClass =
    //   await trainingClassModel.findOneAndUpdate(
    //     { id: trainingClassId },
    //     trainingClassEditForm
    //   );
    console.log("updatedTrainingClass", updatedTrainingClass);
    res.status(200).json({ success: true, message: "Training Class trainingClass updated.", trainingClass: updatedTrainingClass });
  }
};

export default trainingClassUpdate;
