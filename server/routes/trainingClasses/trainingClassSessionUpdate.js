import trainingClassModel from "./trainingClassModel.js";

const trainingClassSessionUpdate = async (req, res) => {
  const { trainingClassId, sessionId } = req.params 
  const { _id, sessionName, sessionDescription, sessionType, percentComplete, sessionDate, sessionTime, sessionDuration, activitiesPerformed, customers } = req.body;
  console.log(sessionId, sessionName, sessionDescription, sessionType, percentComplete, sessionDate, sessionTime, sessionDuration, activitiesPerformed, customers)

  // Validation
  if (
    (!sessionName || sessionName == "")
    // (!sessionDescription || sessionDescription) == "" ||
    // (!sessionType || sessionType == "") ||
    // (percentComplete == "") ||
    // !sessionDate || sessionDate == "" ||
    // !sessionTime || sessionTime == "" ||
    // (sessionDuration == "") 
  ) {
    res.status(500).json({ message: "Training Class Session information not valid." });
  } else {
    const updateSession = await trainingClassModel.findOneAndUpdate(
      // { "sessions._id": _id },
      { _id: trainingClassId, "sessions._id": _id },
      { "$set": { "sessions.$": { sessionName, sessionDescription, sessionType, percentComplete, sessionDate, sessionTime, sessionDuration, activitiesPerformed, customers } } },
      { new: true }
    );
    console.log("updateSession", updateSession);

    res.status(200).json({ success: true, message: "Session updated.", trainingClass: updateSession });
  }
};

export default trainingClassSessionUpdate;
