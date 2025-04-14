import mongoose from "mongoose"

// TODO: Make sure email and username are unique

const Schema = mongoose.Schema

const builderSchema = new Schema({
  trainingClassType: {
    type: String,
    default: ""
  },
  trainer: {
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    // avatar: ******* WTF TO DO WITH THIS HUUUUUHHHHH?!?!??!!??!?!
  },
  sessions: [ 
    {
    sessionName: String, // Like sit, stay, come, down
    sessionDescription: String, // lil blurb
    sessionType: String, // Private or Group
    percentComplete: Number, // for one dog for the one task
    sessionDate: Date,
    sessionTime: String, // ******????? STRING OR NAH??
    locationOfSession: String,
    sessionDuration: Number, // ******????? NUMBER OR NAH??
    activitiesPerformed: String, // can put html to seperate multiple activites
    } 
  ]
})

export default builderSchema

