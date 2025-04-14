import "dotenv/config"
import axios from "axios";
import { generateSessionBuilders } from "./generateSessionBuilder.js";

// console.log(process.env.SERVER_URL)

const seedBuilders = [
  {
    // BASIC OBEDIENCE
    trainingClassType: "Basic Obedience",
    sessions: [
      {
        sessionName: "Week 1: Introduction to Basic Commands - 'Sit', 'Stay', and 'Come'", 
        sessionDescription: "This initial week is designed to learn three fundamental commands: Sit, Stay, and Come. This course is designed to help both dogs and their owners establish a foundation of obedience. These commands are essential for ensuring the safety and well-being of the dog and those around them. The class will provide step-by-step guidance on how to effectively communicate these commands to your dog, using positive reinforcement techniques to encourage good behavior. By the end of the course, participants will have a solid understanding of how to teach their dogs these basic commands, which will serve as a building block for more advanced training.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", // 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 2: 'Down' and 'Heel' - to practice walking alongside the owner", 
        sessionDescription: "Week 2 focuses on two fundamental commands: 'Down' and 'Heel.' This week is designed to reinforce the dog's ability to walk calmly and attentively beside their owner. The 'Down' command teaches the dog to lie down on command, which is essential for maintaining control in various situations. The 'Heel' command ensures the dog walks closely to the owner's left side, without pulling on the leash, promoting a harmonious walking experience. These skills are crucial for a well-behaved pet and lay the foundation for more advanced training.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", // 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 3: 'Leave it', and 'Drop it' - to teach the dog to ignore distractions", 
        sessionDescription: "This week's course is designed to teach dogs to disregard distractions effectively. In the 'Leave it' command, dogs learn to ignore enticing items or situations by focusing on their owner's commands. This skill is crucial for preventing unwanted behaviors and ensuring safety. The 'Drop it' command builds on this by teaching dogs to relinquish items they've picked up, reinforcing the importance of obeying commands even when they're holding something of interest. These commands are essential for a well-behaved dog that can resist temptations and follow instructions.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", // 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 4: 'Speak' and 'Quiet' - to control barking", 
        sessionDescription: "Week 4 focuses on teaching your dog to 'Speak' and 'Quiet,' which are essential commands for managing barking. This week's lessons aim to help you establish clear communication with your dog, enabling you to control when they bark and when they should remain silent. By the end of this week, your dog will learn to respond to your cues, allowing you to maintain a peaceful environment and ensure your dog's well-being.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", // 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 5: 'Fetch' - to encourage retrieval skills", 
        sessionDescription: "This session focuses on teaching your dog to fetch objects, which is a fundamental obedience command. Throughout the lesson, you'll learn how to use positive reinforcement to encourage your dog to pick up and return items to you. The training will include various techniques to improve your dog's ability to retrieve, such as using different types of toys and understanding your dog's motivation. By the end of Week 5, your dog should be able to reliably fetch on command, showcasing improved obedience and a stronger bond between you and your pet.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", // 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 6: 'Place' - to teach the dog to go to a specific spot", 
        sessionDescription: "Week 6 focuses on teaching your dog to reliably go to a designated spot on command. During this lesson, you will learn to use the 'Place' command to instruct your dog to stop moving and remain in a specific location. The training starts with teaching the dog to understand the command 'Place' and to associate it with the action of stopping. You will use positive reinforcement to reward your dog for compliance, ensuring that the dog remains in the spot until given the release command.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", // 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 7: 'Come When Called' With Distractions - to improve recall", 
        sessionDescription: "Week 7 focuses on enhancing your dog's recall ability, even in the presence of distractions. This crucial skill ensures your dog's safety and obedience in various environments. The course teaches you to use consistent commands and positive reinforcement to encourage your dog to come to you reliably, regardless of the distractions around.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", // 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 8: Review and Reinforcement of All Commands - plus a fun trick like 'Shake' or 'Roll over'", 
        sessionDescription: "The final week is designed to consolidate your dog's learning and ensure that all previously taught commands are firmly established. This week focuses on reviewing the core commands such as sit, stay, come, down, and heel. The goal is to reinforce these commands through repetition and positive reinforcement, ensuring your dog responds reliably in various situations. In addition to the command review, Week 8 introduces a fun and engaging trick to further enhance your dog's training. The 'Shake' trick is a classic and simple command that allows your dog to shake hands with you. It's a great way to build trust and strengthen your bond. Alternatively, the 'Roll Over' trick is a more advanced maneuver that requires patience and practice but can be incredibly rewarding to master. To successfully teach these tricks, you'll need to use consistent cues, reward your dog with treats or praise for correct responses, and gradually increase the difficulty as your dog becomes more proficient. Remember, the key to successful dog training is patience, consistency, and positive reinforcement.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", // 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      }
    ]
  },

  // BEHAVIOR MODIFICATION
  {
    trainingClassType: "Behavior Modification",
    sessions: []
  },

  // PUPPY SOCIALIZATION
  {
    trainingClassType: "Puppy Socialization",
    sessions: [
      {
        sessionName: "Week 1: Introduction to Basic Commands - Greetings, 'Sit', and 'Stay'", 
        sessionDescription: "This initial week is designed to teach puppies to greet people politely without jumping, introduce the 'sit' command to help puppies learn to focus and listen, and begin teaching the 'stay' command to build impulse control.", 
        sessionType: "Group", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 1, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 2: Positive Interactions - Leash Walking and Gentle Play", 
        sessionDescription: "Week 2 focuses on teaching puppies to walk calmly on a leash, as well as introducing controlled play with other dogs to encourage socialization.", 
        sessionType: "Group", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 1, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 3: Noise Desensitization - Noise Familiarization and 'Quiet' Command", 
        sessionDescription: "This week's course is designed to expose puppies to various sounds to reduce fear and anxiety, as well as teaching the 'quiet' command to manage barking.", 
        sessionType: "Group", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 1, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 4: Advanced Commands - Reinforce 'Come' and Teach 'Down'", 
        sessionDescription: "Week 4 focuses on reinforcing the 'come' command for safety and control and teaching the 'down' command to improve obedience and prevent jumping.", 
        sessionType: "Group", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 1, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 5: Public Exposure - Public Places and Distractions", 
        sessionDescription: "This session focuses on taking puppies to different public places to practice commands in various environments. Afterwards, the group trainer will introduce distractions to teach focus and obedience.", 
        sessionType: "Group", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 1, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 6: Socialization with Dogs - Dog Interaction and Playgroups", 
        sessionDescription: "Week 6 focuses on facilitating controlled interactions with adult dogs to teach appropriate behavior. Then, playgroups are organized with other owners and thier puppies to encourage positive socialization.", 
        sessionType: "Group", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 7: Obedience Reinforcement - Repeat Commands and New Commands", 
        sessionDescription: "Week 7 focuses on reinforcing previously learned commands to ensure retention, as well as introducing a new command of the owner's choosing - like 'heel' or 'leave it', or a fun trick like 'shake'.", 
        sessionType: "Group", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 1, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 8: Final Assessment and Socialization - Assessment and Socialization Event", 
        sessionDescription: "The final week is designed to evaluate puppies' progress with a final assessment of commands and socialization skills. The training course will wrap up with a socialization event with all the participants from the class and thier puppies to practice learned skills in a fun, social setting, and allow the puppies to play amongst themselves.", 
        sessionType: "Group", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      }
    ]
  },

  // AGILITY
  {
    trainingClassType: "Agility",
    sessions: [
      {
        sessionName: "Week 1: Introduction to Agility", 
        sessionDescription: "The first week is designed to teach the basics of agility training, familiarization with the agility course layout, and introduction to the equipment used in agility training (obstacles, tunnels, jumps, weave poles, etc.).", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 2: Basic Jumps and Tunnels", 
        sessionDescription: "Dogs will practice jumping over low hurdles, learning to approach them with confidence. The trainer will reinforce the 'jump' command and ensure the dog clears the obstacle without hesitation. They will also be introduced to tunnels, learning to enter and exit without fear.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 3: Weave Poles and A-Frame", 
        sessionDescription: "Dogs will learn to weave through a set of poles, using the 'weave' command. The trainer will encourage the dog to maintain a steady pace and focus on the task. The dogs will also climb an A-frame obstacle, learning to navigate the incline.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 4: Dog Walk and Pause Table", 
        sessionDescription: "Dogs will walk on a narrow balance beam, learning to maintain balance. The trainer will use the 'walk' command to guide the dog across the beam. The pause table obstacle will also be introduced.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 5: Obstacle Course Practice - First Week", 
        sessionDescription: "This is the first week out of two for obstacle course practice. This session focuses on combining learned skills to navigate a simplified obstacle course. Focus on timing and coordination between dog and handler.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 6: Obstacle Course Practice - Second Week", 
        sessionDescription: "This is the second week out of two for obstacle course practice. This session focuses on improving speed and agility through drills.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 7: Advanced Techniques", 
        sessionDescription: "Dogs will have the opportunity to practice more complex maneuvers like the Figure-Eight or Teeter-Totter. This class focuses on refining the dog's skills through advanced obstacle courses, enhancing their speed, precision, and problem-solving abilities.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 8: Course Finale", 
        sessionDescription: "Dogs will run through the entire agility course while timed, incorporating all the skills learned in previous weeks. The trainer will use a combination of commands to guide the dog through the course.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      }
    ]
  },

  // ADVANCED OBEDIENCE
  {
    trainingClassType: "Advanced Obedience",
    sessions: [
      {
        sessionName: "Week 1: Review and Reinforcement", 
        sessionDescription: "This class will focus on reviewing the basic obedience commands (sit, stay, come, down, and heel) that the dog has learned in previous training. The instructor will reinforce these commands and ensure that the dog is responding correctly and consistently. The class will also address any issues or challenges the dog may have with these commands.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 2: Advanced Heeling", 
        sessionDescription: "In this class, the dog will learn to heel on a loose leash, meaning they will walk beside their handler without pulling or dragging. The instructor will teach the dog to maintain a consistent distance from the handler and to pay attention to their movements.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 3: Advanced Recalls", 
        sessionDescription: "The dog will learn to respond to their name and come to their handler when called, even from a distance or in distracting environments. The instructor will teach the dog to associate their name with the recall command and to respond quickly and reliably.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 4: 'Leave It'", 
        sessionDescription: "The dog will learn to ignore or drop items on command, which is an essential skill for preventing unwanted behaviors such as chewing or stealing. The instructor will teach the dog to focus on their handler and ignore the item until given the 'leave it' command.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 5: 'Give'/'Drop It'", 
        sessionDescription: "This week is designed to enhance your dog's ability to relinquish items voluntarily, which is a crucial skill for preventing resource guarding and promoting good manners.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 6: Watch Me", 
        sessionDescription: "The dog will learn to focus on their handler's face and eyes, which is crucial for maintaining eye contact and building a strong bond. The instructor will teach the dog to look at their handler when called and to maintain eye contact throughout the training session.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 7: Advanced 'Stay' and 'Down'", 
        sessionDescription: "The dog will learn to maintain a stationary position on command, even when distracted or excited. The instructor will teach the dog to focus on their handler and stay in place until given the 'come' command or released from the stay. The dog will also learn to lie down on command, which is an essential skill for various activities such as grooming, vet visits, and training. The instructor will teach the dog to lie down on cue and maintain the position until given the 'stand' command or released from the down.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 8: Review and Reinforcement of All Commands", 
        sessionDescription: "In this final class, the dog will demonstrate their mastery of all the advanced obedience commands learned throughout the course. The instructor will assess the dog's performance and provide feedback and tips for continued improvement.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      }
    ]
  },

  // SERVICE AND THERAPY DOG TRAINING
  {
    trainingClassType: "Service & Therapy Dog Training",
    sessions: [
      {
        sessionName: "Week 1: Introduction to Service and Therapy Dog Training", 
        sessionDescription: "This week focuses on basic obedience commands ('sit', 'stay', 'come', 'heel', 'down') that are the building blocks for more advanced training. The goal is to establish a strong foundation of trust and communication between the dog and the handler.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 2: Leash Training and Public Access", 
        sessionDescription: "This week emphasizes leash manners and public access etiquette. The dog learns to navigate crowded areas without causing disturbances, ensuring the safety and comfort of both the dog and the public.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 3: Desensitization and Distraction Training", 
        sessionDescription: "The focus of this week is on desensitization to various distractions. The dog learns to remain calm and focused on the handler, even in challenging environments. The dog is instructed to ignore common distractions like other dogs, people, and noises.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 4: Advanced Obedience and Control", 
        sessionDescription: "This week builds on the previous weeks' training, focusing on advanced obedience and control. The commands 'drop it' and 'leave it' are introduced, which instructs the dog to drop an item on command and teaches the dog to ignore items that are not allowed, such as food or trash. The dog learns to follow commands even in distracting situations, ensuring the handler's safety and the dog's well-being.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 5: Socialization and Interaction", 
        sessionDescription: "The focus of this week is on socialization and interaction with people. The dog learns to behave appropriately in social settings, making it a well-mannered companion.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 6: Service Dog Tasks", 
        sessionDescription: "This week introduces specific tasks that service dogs perform. The dog learns to assist the handler in daily activities, enhancing the handler's independence and quality of life.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 7: Public Access and Behavior", 
        sessionDescription: "The focus of this week is on maintaining good behavior in public settings. The dog learns to be a well-behaved companion, ensuring the handler's comfort and the public's acceptance.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 8: Review and Certification", 
        sessionDescription: "The final week is a comprehensive review of all the training covered in the course. The dog undergoes a certification test to ensure it is ready to assist its handler in various settings.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "",
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      }
    ]
  },
]


// const seedBuilders = generateSessionBuilders(1)
// console.log("seedBuilders", seedBuilders)

seedBuilders.forEach(async (builder) => {
  const addBuilder = await axios.post(`${process.env.SERVER_URL}/builders`, builder)
  console.log("addBuilder", addBuilder.data)
})

