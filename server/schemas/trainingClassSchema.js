import mongoose from "mongoose";

const Schema = mongoose.Schema;

const trainingClassSchema = new Schema({
  trainingClassName: {
    // The date/or a number/or a season and the year and the lesson/service
    type: String,
    default: "",
  },
  trainingClassDescription: {
    // Description of what the lesson is going to teach the dogs/the goals
    type: String,
    default: "",
  },
  trainingClassType: String, // Type of service/lesson: Obedience, Behavior Modification, etc.
  startDate: {
    // FOR THE WHOLE CLASS
    type: Date,
    default: null,
  },
  endDate: {
    type: Date,
    default: null,
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
      sessionTime: String,
      sessionDuration: Number,
      activitiesPerformed: String, // can put html to seperate multiple activites
      customers: [
        {
          firstName: String,
          lastName: String,
          username: String,
          email: String,
          phone: String,
          address: String,
          dogName: String,
          dogBreed: String,
          dogGender: String,
          dogAge: Number,
          dogSize: String,
          trainingGoals: String, // just show it as overall goal, can put html to seperate multiple goals
          progressNotes: String,
          // ALL DOG INFORMATION HERE
        },
      ],
    },
  ],
  // users: [
  //   {
  //     firstName: String,
  //     lastName: String,
  //     email: String,
  //     username: String,
  //     role: [ String ]
  //   }
  // ]
});

export default trainingClassSchema;

// number of dogs currently enrolled, dropped out, and graduated
// number of male/female dogs enrolled
// number of dogs enrolled in each of the 6 different services

// progress of individual dogs???

// will have to average the % complete of each dog's progress for the total progress of all dogs in the class

// could have an owner/founder/CEO: in the schema that is just like the trainer

// WHERE WOULD I PUT THESE??:
// customer Training Schedule ??(maybe? a lil blurb "Once a week blah blah blah")
