import "dotenv/config"
import axios from "axios"

const trainerData = [
  {
    trainingClassType: "Basic Obedience",
    trainer: {
      firstName: "Megan",
      lastName: "Alexander",
      username: "megan",
      email: "megan@leashandlearn.com"
    }
  },
  {
    trainingClassType: "Behavior Modification",
    trainer: {
      firstName: "Katherine",
      lastName: "Finch",
      username: "katherine",
      email: "katherine@leashandlearn.com"
    }
  },
  {
    trainingClassType: "Puppy Socialization",
    trainer: {
      firstName: "Annie",
      lastName: "Baysinger",
      username: "annie",
      email: "annie@leashandlearn.com"
    }
  },
  {
    trainingClassType: "Agility",
    trainer: {
      firstName: "Jesse",
      lastName: "Soliz",
      username: "jesse",
      email: "jesse@leashandlearn.com"
    }
  },
  {
    trainingClassType: "Advanced Obedience",
    trainer: {
      firstName: "Audrey",
      lastName: "Radulovich",
      username: "audrey",
      email: "audrey@leashandlearn.com"
    }
  },
  {
    trainingClassType: "Service & Therapy Dog Training",
    trainer: {
      firstName: "Rashaun",
      lastName: "Marshall",
      username: "rashaun",
      email: "rashaun@leashandlearn.com"
    }
  }
]

trainerData.forEach(async (user) => {
  const updateBuilder = await axios.put(`${process.env.SERVER_URL}/builders`, user)
  console.log("updateBuilder", updateBuilder.data)
})
