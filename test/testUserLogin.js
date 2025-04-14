import "dotenv/config"
import axios from "axios";

const users = [
  {
    firstName: 'Mariah',
    lastName: 'Stokes',
    email: 'Maryam14@yahoo.com',
    username: 'Earlene_Lakin',
    password: 'PPCN'
  }
]

const loginUser = await axios.post(`${process.env.SERVER_URL}/users/login`, { username: users[0].username, password: users[0].password })
console.log("loginUser:", loginUser)
