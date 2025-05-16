import userModel from "./userModel.js"

const dogUpdate =  async (req, res) => {
  const { userId, dogId, editDogForm } = req.body;
  // const { userId, dogId, name, age, breed, gender, weight, photo, size, spayedNeutered, behavioralIssues, medicalConditions, trainingGoals, additionalNotes } = req.body
  console.log("backend req.body dogUpdate", userId, dogId, editDogForm)
  // console.log("backend req.body with everythang in it", userId, dogId, name, age, breed, gender, weight, photo, size, spayedNeutered, behavioralIssues, medicalConditions, trainingGoals, additionalNotes)
  console.log("!!!!!!!!!req.body dogUpdate", req.body)

  
  const frontendEditDogForm = editDogForm
  console.log("frontendEditDogForm", frontendEditDogForm)
  
  
  // Validation
  if (
    (!frontendEditDogForm.name || frontendEditDogForm.name == "") 
    // (!name || name == "")
    // (!age || age) == "" ||
    // (!breed || breed == "") ||
    // (photo == "") ||
    // !gender || gender == "" ||
    // !weight || weight == "" ||
    // (size == "") 
  ) {
    res.status(500).json({ "message": "Dog information not valid."})
  } 
  else {
    // const newDog = await userModel.findOne({ _id: userId })
    // console.log("NEW DOG. FINDING IT ON THE BACKEND WITH USERID AND DOGID", newDog)
    // console.log("new dog.dogs", newDog[0].dogs)
    // const tempDog = { name: frontendEditDogForm.name, age: frontendEditDogForm.age, breed: frontendEditDogForm.breed, gender: frontendEditDogForm.gender, weight: frontendEditDogForm.weight, photo: frontendEditDogForm.photo, size: frontendEditDogForm.size, birthday: frontendEditDogForm.birthday, spayedNeutered: frontendEditDogForm.spayedNeutered, behavioralIssues: frontendEditDogForm.behavioralIssues, medicalConditions: frontendEditDogForm.medicalConditions, trainingGoals: frontendEditDogForm.trainingGoals, additionalNotes: frontendEditDogForm.additionalNotes }

    // console.log("********tempDog. Dog stuff with 'frontendEditDogForm on backend", tempDog)

    const updateDog = await userModel.findOneAndUpdate(
      { _id: userId, "dogs._id": dogId },
      { "$set": { "dogs.$": { name: frontendEditDogForm.name, age: frontendEditDogForm.age, breed: frontendEditDogForm.breed, gender: frontendEditDogForm.gender, weight: frontendEditDogForm.weight, photo: frontendEditDogForm.photo, size: frontendEditDogForm.size, birthday: frontendEditDogForm.birthday, spayedNeutered: frontendEditDogForm.spayedNeutered, behavioralIssues: frontendEditDogForm.behavioralIssues, medicalConditions: frontendEditDogForm.medicalConditions, trainingGoals: frontendEditDogForm.trainingGoals, additionalNotes: frontendEditDogForm.additionalNotes } } },
      { new: true }
    )
    console.log("updateDog", updateDog)

    res.status(200).json({ "success": true, "message": "Dog updated.", user: updateDog })
  }
}

export default dogUpdate

// dogs: [{
//   name: String,
//   age: String,
//   breed: String,
//   gender: String,
//   weight: String,
//   photo: String,
//   size: String,
//   spayedNeutered: String,
//   behavioralIssues: String,
//   medicalConditions: String,
//   trainingGoals: String,
//   additionalNotes: String
// }],

// name, age, breed, gender, weight, photo, size, spayedNeutered, behavioralIssues, medicalConditions, trainingGoals, additionalNotes