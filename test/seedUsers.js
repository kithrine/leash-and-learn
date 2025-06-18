import "dotenv/config"
import axios from "axios";
// import { generateFakeUsers } from "./generateFakeUsers.js";

// console.log(process.env.SERVER_URL)

const seedUsers = [
  // { firstName: "Kit",
  //   email: "kit@leashandlearn.com",
  //   lastName: "Tensfeldt",
  //   username: "kit",
  //   password: "test",
  //   role: "Business Manager",
  //   avatar: "",
  //   phoneNumber: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   dogs: []
  // },
  { firstName: "Megan",
    lastName: "Alexander",
    email: "megan@leashandlearn.com",
    username: "megan",
    password: "test",
    role: "Trainer",
    avatar: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dogs: []
  },
  { firstName: "Katherine",
    lastName: "Finch",
    email: "katherine@leashandlearn.com",
    username: "katherine",
    password: "test",
    role: "Trainer",
    avatar: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dogs: []
  },
  // { firstName: "Annie",
  //   email: "annie@leashandlearn.com",
  //   lastName: "Baysinger",
  //   username: "annie",
  //   password: "test",
  //   role: "Trainer",
  //   avatar: "",
  //   phoneNumber: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   dogs: []
  // },
  { firstName: "Jesse",
    lastName: "Soliz",
    email: "jesse@leashandlearn.com",
    username: "jesse",
    password: "test",
    role: "Trainer",
    avatar: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dogs: []
  },
  { firstName: "Audrey",
    lastName: "Radulovich",
    email: "audrey@leashandlearn.com",
    username: "audrey",
    password: "test",
    role: "Trainer",
    avatar: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dogs: []
  },
  { firstName: "Rashaun",
    lastName: "Marshall",
    email: "rashaun@leashandlearn.com",
    username: "rashaun",
    password: "test",
    role: "Trainer",
    avatar: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dogs: []
  },
  // { firstName: "Kayla",
  //   lastName: "Martin",
  //   email: "kayla@gmail.com",
  //   username: "kayla",
  //   password: "test",
  //   role: "User"
  // },
]

// const seedUsers = generateFakeUsers(5)
console.log("seedUsers", seedUsers)

seedUsers.forEach(async (user) => {
  const addUser = await axios.post(`${process.env.SERVER_URL}/users`, user)
  console.log("addUser", addUser.data)
})

// const userSchema = new Schema({
//   firstName: {
//     type: String,
//     default: ""
//   },
//   lastName: {
//     type: String,
//     default: ""
//   },
//   email: {
//     type: String,
//     default: ""
//   },
//   username: {
//     type: String,
//     default: ""
//   },
//   password: {
//     type: String,
//     default: ""
//   },
//   role: [ String ],
//   avatar: {
//     type: String,
//     default: ""
//   },
//   phoneNumber: {
//     type: String,
//     default: ""
//   },
//   address: {
//     type: String,
//     default: ""
//   },
//   city: {
//     type: String,
//     default: ""
//   },
//   state: {
//     type: String,
//     default: ""
//   },
//   zipCode: {
//     type: String,
//     default: ""
//   },
//   dogs: [{
//     name: String,
//     age: String,
//     breed: String,
//     gender: String,
//     weight: String,
//     photo: String,
//     size: String,
//     birthday: Date,
//     spayedNeutered: String,
//     behavioralIssues: String,
//     medicalConditions: String,
//     trainingGoals: String,
//     additionalNotes: String
//   }],
//   token: {
//     type: [ String ]
//   }
// })

// avatar: "",
// phoneNumber: "",
// address: "",
// city: "",
// state: "",
// zipCode: "",
// dogs: []