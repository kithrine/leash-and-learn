import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userIndex from "./users/userIndex.js"
import trainingClassIndex from "./trainingClasses/trainingClassIndex.js"
import builderIndex from "./builders/builderIndex.js"
import contactIndex from "./contactUs/contactIndex.js"
import blogIndex from "./blog/blogIndex.js"
import chatIndex from "./chat/chatIndex.js"

console.log(process.env.MONGODB_URL)

const app = express()
app.use(express.json({ limit: "5gb" }))
app.use(cors())
const port = process.env.EXPRESS_PORT || 8888

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/users", userIndex)
app.use("/training-classes", trainingClassIndex)
app.use("/builders", builderIndex)
app.use("/contact", contactIndex)
app.use("/blog", blogIndex)
app.use("/chat", chatIndex)

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    data: "404"
  })
})

try {
  const mongoURL = process.env.MONGODB_URL || ""
  await mongoose.connect(mongoURL)
  console.log(`Leash & Learn connected to database ${mongoURL}`)

  app.listen(port, () => {
    console.log(`Leash & Learn app listening on port ${port}`)
    })
}
catch(err) {
  console.log(err)
}


// ANOTHER WAY TO DO THIS WITH A TRY, CATCH:
// // MongoDB setup
// const mongoURL = process.env.MONGODB_URL || ""
// // Connect to MongoDB
// mongoose.connect(mongoURL)
//   .then(res => console.log(`Leash & Learn connected to database ${mongoURL}`))
//   .catch(err => console.log(err))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Leash & Learn app listening on port ${port}`)
// })