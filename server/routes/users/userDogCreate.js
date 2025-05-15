import userModel from "./userModel.js"

const userDogCreate =  async (req, res) => {
  // const { userId } = req.params
  const { userId, addDogForm } = req.body;
  console.log("backend req.body", userId, addDogForm)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!req.body", req.body)
  
  const frontendDog = addDogForm
  console.log("frontendDog", frontendDog)
  
  
  
  
  // Validation
  if (
    (!frontendDog.name || frontendDog.name == "") 
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
    const newDog = await userModel.find({ _id: userId })
    console.log("new dog", newDog)
    console.log("new dog.dogs", newDog[0].dogs)
    const tempDog = { name: frontendDog.name, age: frontendDog.age, breed: frontendDog.breed, gender: frontendDog.gender, weight: frontendDog.weight, photo: frontendDog.photo, size: frontendDog.size, birthday: frontendDog.birthday, spayedNeutered: frontendDog.spayedNeutered, behavioralIssues: frontendDog.behavioralIssues, medicalConditions: frontendDog.medicalConditions, trainingGoals: frontendDog.trainingGoals, additionalNotes: frontendDog.additionalNotes }

    newDog[0].dogs.push(tempDog)
    console.log("newDog", newDog)
    console.log("newDog array", newDog[0].dogs)

    const addDog = await userModel.findOne({ _id: userId })
    addDog.dogs.push(tempDog)
    addDog.save()
    console.log("addDog", addDog)

    res.status(200).json({ "success": true, "message": "Dog created.", user: addDog })
  }
}

export default userDogCreate

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