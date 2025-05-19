import trainingClassModel from "./trainingClassModel.js"

const trainingClassSessionCreate =  async (req, res) => {
  const {trainingClassId} = req.params
  const { sessionName, sessionDescription, sessionType, percentComplete, sessionDate, sessionTime, sessionDuration, activitiesPerformed, customers } = req.body;
 
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
    res.status(500).json({ "message": "Training Class Session information not valid."})
  } 
  else {
    const newSession = await trainingClassModel.find({_id: trainingClassId})
    console.log("new session", newSession)
    console.log("new session.sessions", newSession[0].sessions)
    const tempSession = {sessionName, sessionDescription, sessionType, percentComplete, sessionDate, sessionTime, sessionDuration, activitiesPerformed, customers}

    newSession[0].sessions.push(tempSession)
    console.log("newSession", newSession)
    console.log("newSession array", newSession[0].sessions)

    // const addSession = await trainingClassModel.findOneAndUpdate({_id: trainingClassId}, { "$set": { sessions: { $concatArrays: [ "$sessions", [newSession[0].sessions]]} } },
    //   { new: true })

    const addSession = await trainingClassModel.findOne({_id: trainingClassId} )
    addSession.sessions.push( tempSession )
    addSession.save()

    console.log("addSession", addSession)
    // {sessionName, sessionDescription, sessionType, percentComplete, sessionDate, sessionTime, sessionDuration, activitiesPerformed, customers})
    // console.log("createSession", createSession)

    // const createSession = await trainingClassModel.create({ trainingClassName, trainingClassDescription, trainingClassType, startDate, endDate, trainer })
    // console.log("createSession", createSession)

    res.status(200).json({ "success": true, "message": "Training Class Session created.", trainingClass: addSession})
  }
}

export default trainingClassSessionCreate