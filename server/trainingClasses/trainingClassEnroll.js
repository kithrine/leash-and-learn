import trainingClassModel from "./trainingClassModel.js";
import userModel from "../users/userModel.js";

// Find the trainingClass by ID because that is the record we are updating
// Do I need to find the userId too and put it in req.body? ... i just do not know because I need that user's dog that they select... but it seems really complicated to grab that whole user object and then select only one dog from that object

const trainingClassEnroll = async (req, res) => {
  // const { selectedClass } = req.params
  const { selectedClass, selectedDog, userId } = req.body
  // const { trainingClassType, firstName, lastName, email, username, avatar, phoneNumber, address, city, state, zipCode, dog } = req.body

  // console.log("trainingClassEnroll", trainingClassType, selectedClass, firstName, lastName, email, username, avatar, phoneNumber, address, city, state, zipCode, dog)
  // console.log("trainingClassEnroll", "selectedClassId:", selectedClass, "selectedDogId:", selectedDog, "userId:", userId)
  
  // const { trainingClassEditForm } = req.body;

  // Validation
  if (
    (!selectedClass || selectedClass == "") 
    // (!dog) ||
    // (!email || email == "")
  ) {
    res.status(500).json({ message: "Enrollment information not valid." });
  } else {
    // const updatedTrainingClass = await trainingClassModel.findOneAndUpdate({ _id: selectedClass } , { firstName, lastName, email, username, avatar, phoneNumber, address, city, state, zipCode, dog}, { new: true })

    // console.log("updatedTrainingClass", updatedTrainingClass);
    // res.status(200).json({ success: true, message: "Training Class trainingClass updated.", trainingClass: updatedTrainingClass });

    const trainingClass = await trainingClassModel.find({ _id: selectedClass })
    // console.log("trainingClass", trainingClass)
    // console.log("trainingClass.customers", trainingClass[0].customers)
    const findUser = await userModel.find({ _id: userId })
    // console.log("findUser", findUser)






    // const dog =  findUser[0].dogs.filter(dog => dog._id.equals(selectedDog)) 

    // Use find to get a single dog object
    const dog =  findUser[0].dogs.find(dog => dog._id.equals(selectedDog)) 
    console.log("dog", dog)

    const customer = { firstName: findUser[0].firstName, lastName: findUser[0].lastName, email: findUser[0].email, username: findUser[0].username, avatar: findUser[0].avatar, phoneNumber: findUser[0].phoneNumber, address: findUser[0].address, city: findUser[0].city, state: findUser[0].state, zipCode: findUser[0].zipCode, dogs: [dog] } // Ensure dogs is an array, even if it contains only one dog

    // console.log("findUser[0].dogs.filter(dog => dog._id === selectedDog)", findUser[0].dogs.map(dog => dog._id === selectedDog))
    console.log("CUSTOMER", customer)

    // if (customer && dog) {
      // const addCustomer = await trainingClassModel.updateOne(
      //   { _id: selectedClass }, 
      //   { $push: { customers: customer } })
      //   console.log("%%%%%%%%%%%%%%%%%addCustomer", addCustomer)
      // trainingClass[0].customers.push(customer)
      // console.log("trainingClass array*****************", trainingClass[0].customers)
    // }

    //   if (customer && dog) {
    //   const addCustomer = await trainingClassModel.findByIdAndUpdate(
    //     { _id: selectedClass }, 
    //     { $push: { customers: customer } }, { new: true })
    //     // console.log("%%%%%%%%%%%%%%%%%addCustomer", addCustomer)
    //   // trainingClass[0].customers.push(customer)
    //   // console.log("trainingClass array*****************", trainingClass[0].customers)

    //   res.status(200).json({ "success": true, "message": "Customer Enrolled in Training Class.", trainingClass: addCustomer})

    // }

    
    // console.log("trainingClass**************", trainingClass)

    const addCustomer = await trainingClassModel.findOne({_id: selectedClass} )
    // console.log("$$$$$$$$$$$$$$addCustomer", addCustomer)
    addCustomer.customers.push( customer )
    addCustomer.save()

    console.log("addCustomer", addCustomer)

    res.status(200).json({ "success": true, "message": "Customer Enrolled in Training Class.", trainingClass: addCustomer})
  }
};

export default trainingClassEnroll;