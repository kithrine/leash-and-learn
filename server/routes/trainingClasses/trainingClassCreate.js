import trainingClassModel from "../../schemas/trainingClassModel.js"
import builderModel from "../../schemas/builderModel.js"
import userModel from "../../schemas/userModel.js"

const trainingClassCreate =  async (req, res) => {
  const { trainingClassName, trainingClassDescription, trainingClassType, startDate, endDate, trainer } = req.body
 
  // Validation
  if (
    (!trainingClassType || trainingClassType == "") ||
    (!trainer) ||
    (!trainingClassName || trainingClassName == "") ||
    (!trainingClassDescription || trainingClassDescription == "") ||
    (!startDate || startDate == "") ||
    (!endDate || endDate == "")
  ) {
    res.status(500).json({ "message": "Training Class information not valid."})
  } 
  else {
    const trainingClassTemplate = await builderModel.find({ trainingClassType })
    console.log("trainingClassTemplate", trainingClassTemplate)

    const template = trainingClassTemplate[0]
    const sessions = template.sessions.map((session, index) => {
      const newDate = new Date(startDate)
      newDate.setDate(newDate.getDate() + (index * 7))
      return {...session, sessionDate: newDate, sessionTime: "12:00 PM", sessionType: "Group", customers: [] }
    })
    console.log("template", template, "sessions", sessions)
    const newTrainingClassTemplate = { ...template, trainingClassName, trainingClassDescription, trainingClassType, startDate, endDate}
    console.log("newTrainingClassTemplate", newTrainingClassTemplate)

    const newTrainingClass = await trainingClassModel.create({ sessions, trainer: template.trainer, sessionType: template.sessionType, trainingClassName, trainingClassDescription, trainingClassType, startDate, endDate })
    console.log("newTrainingClass", newTrainingClass)

    // const trainingClassUsers = await userModel.find({ trainer: trainingClassTemplate.trainer }) 
    // console.log("trainingClassUsers", trainingClassUsers)
    // trainingClassTemplate.sessions(session => sessions.push(trainingClassUsers.trainer.includes(trainer))) 

    // ^^^^^ ***ACTIVELY WORKING ON THIS!!! Video 58 @ 22min***

    // const newTrainingClass = await trainingClassModel.create({ trainingClassName, trainingClassDescription, trainingClassType, startDate, endDate, trainer })
    // console.log("newTrainingClass", newTrainingClass)


    res.status(200).json({ "success": true, "message": "Training Class created."})
  }
}

export default trainingClassCreate
