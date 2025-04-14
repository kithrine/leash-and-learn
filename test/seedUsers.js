import "dotenv/config"
import axios from "axios";
// import { generateFakeUsers } from "./generateFakeUsers.js";

// console.log(process.env.SERVER_URL)

const seedUsers = [
  { firstName: "Kit",
    lastName: "Tensfeldt",
    email: "kit@leashandlearn.com",
    username: "kit",
    password: "test",
    role: "Business Manager"
  },
  { firstName: "Megan",
    lastName: "Alexander",
    username: "megan",
    email: "megan@leashandlearn.com",
    password: "test",
    role: "Trainer"
  },
  { firstName: "Katherine",
    lastName: "Finch",
    username: "katherine",
    email: "katherine@leashandlearn.com",
    password: "test",
    role: "Trainer"
  },
  { firstName: "Annie",
    lastName: "Baysinger",
    email: "annie@leashandlearn.com",
    username: "annie",
    password: "test",
    role: "Trainer"
  },
  { firstName: "Jesse",
    lastName: "Soliz",
    username: "jesse",
    email: "jesse@leashandlearn.com",
    password: "test",
    role: "Trainer"
  },
  { firstName: "Audrey",
    lastName: "Radulovich",
    username: "audrey",
    email: "audrey@leashandlearn.com",
    password: "test",
    role: "Trainer"
  },
  { firstName: "Rashaun",
    lastName: "Marshall",
    username: "rashaun",
    email: "rashaun@leashandlearn.com",
    password: "test",
    role: "Trainer"
  },
  { firstName: "Kayla",
    lastName: "Martin",
    email: "kayla@gmail.com",
    username: "kayla",
    password: "test",
    role: "User"
  },
]

// const seedUsers = generateFakeUsers(5)
console.log("seedUsers", seedUsers)

seedUsers.forEach(async (user) => {
  const addUser = await axios.post(`${process.env.SERVER_URL}/users`, user)
  console.log("addUser", addUser.data)
})

