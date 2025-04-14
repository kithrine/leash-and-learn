import trainingClassModel from "../../schemas/trainingClassModel.js";

const trainingClassSessionDelete = async (req, res) => {
  const { trainingClassId, sessionId } = req.params // probs projectId lolz
  console.log("sessionId in trainingClassSessionDelete", trainingClassId, sessionId)
  // Validation
  if (
    (!trainingClassId || trainingClassId == "") ||
    (!sessionId || sessionId == "")
  ) {
    res.status(500).json({ message: "Training Class Session information not valid." });
  } else {
    const deleteSession = await trainingClassModel.updateOne({ _id: trainingClassId }, { $pull: { sessions: { _id: sessionId } }});
    const getTrainingClass = await trainingClassModel.findOne({ _id: trainingClassId })
    console.log("deleteSession", deleteSession);
    console.log("getTrainingClass", getTrainingClass);

    res.status(200).json({ success: true, message: "Session deleted.", trainingClass: getTrainingClass });
  }
};

export default trainingClassSessionDelete;
