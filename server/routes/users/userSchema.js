import mongoose from "mongoose"

// TODO: Make sure email and username are unique

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  username: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  role: [ String ],
  avatar: {
    type: String,
    default: ""
  },
  phoneNumber: {
    type: String,
    default: ""
  },
  address: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  state: {
    type: String,
    default: ""
  },
  zipCode: {
    type: String,
    default: ""
  },
  dogs: [{
    name: String,
    age: String,
    breed: String,
    gender: String,
    weight: String,
    photo: String,
    size: String,
    birthday: Date,
    spayedNeutered: String,
    behavioralIssues: String,
    medicalConditions: String,
    trainingGoals: String,
    additionalNotes: String
  }],
  token: {
    type: [ String ]
  }
})

export default userSchema

