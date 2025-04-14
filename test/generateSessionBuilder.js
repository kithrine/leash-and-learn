const generateSessionBuilder = () => {
  return {
    trainingClassType: "Basic Obedience",
    sessions: [
      {
        sessionName: "Week 1: Introduction to Basic Commands - 'Sit', 'Stay', and 'Come'", 
        sessionDescription: "This initial week is designed to learn three fundamental commands: Sit, Stay, and Come. This course is designed to help both dogs and their owners establish a foundation of obedience. These commands are essential for ensuring the safety and well-being of the dog and those around them. The class will provide step-by-step guidance on how to effectively communicate these commands to your dog, using positive reinforcement techniques to encourage good behavior. By the end of the course, participants will have a solid understanding of how to teach their dogs these basic commands, which will serve as a building block for more advanced training.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 2: 'Down' and 'Heel' - to practice walking alongside the owner", 
        sessionDescription: "Week 2 focuses on two fundamental commands: 'Down' and 'Heel.' This week is designed to reinforce the dog's ability to walk calmly and attentively beside their owner. The 'Down' command teaches the dog to lie down on command, which is essential for maintaining control in various situations. The 'Heel' command ensures the dog walks closely to the owner's left side, without pulling on the leash, promoting a harmonious walking experience. These skills are crucial for a well-behaved pet and lay the foundation for more advanced training.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 3: 'Leave it', and 'Drop it' - to teach the dog to ignore distractions", 
        sessionDescription: "This week's course is designed to teach dogs to disregard distractions effectively. In the 'Leave it' command, dogs learn to ignore enticing items or situations by focusing on their owner's commands. This skill is crucial for preventing unwanted behaviors and ensuring safety. The 'Drop it' command builds on this by teaching dogs to relinquish items they've picked up, reinforcing the importance of obeying commands even when they're holding something of interest. These commands are essential for a well-behaved dog that can resist temptations and follow instructions.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 4: 'Speak' and 'Quiet' - to control barking", 
        sessionDescription: "Week 4 focuses on teaching your dog to 'Speak' and 'Quiet,' which are essential commands for managing barking. This week's lessons aim to help you establish clear communication with your dog, enabling you to control when they bark and when they should remain silent. By the end of this week, your dog will learn to respond to your cues, allowing you to maintain a peaceful environment and ensure your dog's well-being.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 5: 'Fetch' - to encourage retrieval skills", 
        sessionDescription: "This session focuses on teaching your dog to fetch objects, which is a fundamental obedience command. Throughout the lesson, you'll learn how to use positive reinforcement to encourage your dog to pick up and return items to you. The training will include various techniques to improve your dog's ability to retrieve, such as using different types of toys and understanding your dog's motivation. By the end of Week 5, your dog should be able to reliably fetch on command, showcasing improved obedience and a stronger bond between you and your pet.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 6: 'Place' - to teach the dog to go to a specific spot", 
        sessionDescription: "Week 6 focuses on teaching your dog to reliably go to a designated spot on command. During this lesson, you will learn to use the 'Place' command to instruct your dog to stop moving and remain in a specific location. The training starts with teaching the dog to understand the command 'Place' and to associate it with the action of stopping. You will use positive reinforcement to reward your dog for compliance, ensuring that the dog remains in the spot until given the release command.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 7: 'Come when called' with distractions to improve recall", 
        sessionDescription: "Week 7 focuses on enhancing your dog's recall ability, even in the presence of distractions. This crucial skill ensures your dog's safety and obedience in various environments. The course teaches you to use consistent commands and positive reinforcement to encourage your dog to come to you reliably, regardless of the distractions around.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      },
      {
        sessionName: "Week 8: Review and reinforcement of all commands, plus a fun trick like 'Shake' or 'Roll over'", 
        sessionDescription: "The final week is designed to consolidate your dog's learning and ensure that all previously taught commands are firmly established. This week focuses on reviewing the core commands such as sit, stay, come, down, and heel. The goal is to reinforce these commands through repetition and positive reinforcement, ensuring your dog responds reliably in various situations. In addition to the command review, Week 8 introduces a fun and engaging trick to further enhance your dog's training. The 'Shake' trick is a classic and simple command that allows your dog to shake hands with you. It's a great way to build trust and strengthen your bond. Alternatively, the 'Roll Over' trick is a more advanced maneuver that requires patience and practice but can be incredibly rewarding to master. To successfully teach these tricks, you'll need to use consistent cues, reward your dog with treats or praise for correct responses, and gradually increase the difficulty as your dog becomes more proficient. Remember, the key to successful dog training is patience, consistency, and positive reinforcement.", 
        sessionType: "", // Private or Group
        percentComplete: 0,
        sessionDate: "",
        sessionTime: "", 
        sessionDuration: 2, // in hours
        activitiesPerformed: "", // can put html to seperate multiple activites]
      }
    ],
    trainingClassType: "Behavior Modification",
    sessions: [],
  };
};

export const generateSessionBuilders = (length) => {
  const builders = [];
  Array.from({ length: length }).forEach(() => {
    builders.push(generateSessionBuilder());
  });
  return builders;
};

// BUILDER SCHEMA REFERENCE
// sessions: [
//   {
//     sessionName: String, // Like sit, stay, come, down
//     sessionDescription: String, // lil blurb
//     sessionType: String, // Private or Group
//     percentComplete: Number, // for one dog for the one task
//     sessionDate: Date,
//     sessionTime: String, // ******????? STRING OR NAH??
//     sessionDuration: Number, // ******????? NUMBER OR NAH??
//     activitiesPerformed: String, // can put html to seperate multiple activites
//   },
// ],


// http://192.168.1.100:8082/chat/I am building a project tracker app for a dog training business. For a basic dog obedience class, what are some tasks or commands that would be taught in a course that runs once a week for 12 weeks?

// http://192.168.1.100:8082/chat/I need a breif description for a dog training class called Reinforcement of basic commands and introduction to new commands, where they are teaching the dogs the commands Sit, Stay, Come, and Down.

// http://192.168.1.100:8082/chat/I need a breif description of a20basic obedience dog training course, called Week 3: 'Leave it', and 'Drop it' - to teach the dog to ignore distractions




// In a basic dog obedience class that runs once a week for 8 weeks, the following tasks or commands might be taught:

// 1. Week 1: Introduction to basic commands - "Sit," "Stay," and "Come."

// 2. Week 2: "Down" and "Heel" to practice walking alongside the owner.

// 3. Week 3: "Leave it" and "Drop it" to teach the dog to ignore distractions.

// 4. Week 4: "Speak" and "Quiet" to control barking.

// 5. Week 5: "Fetch" to encourage retrieval skills.

// 6. Week 6: "Place" to teach the dog to go to a specific spot.

// 7. Week 7: "Come when called" with distractions to improve recall.

// 8. Week 8: Review and reinforcement of all commands, plus a fun trick like "Shake" or "Roll over."


// Each week, the dog would practice these commands in various environments to ensure they are well-rounded and obedient.





// In a basic dog obedience class for a dog training business, the following tasks or commands might be taught over a 12-week course:


// 1. Week 1-2: Introduction to basic commands
//    - Sit
//    - Stay
//    - Come
//    - Down

// 2. Week 3-4: Reinforcement of basic commands and introduction to new commands
//    - Heel
//    - Leave it
//    - Drop it

// 3. Week 5-6: Advanced obedience and impulse control
//    - Recall from a distance
//    - Wait at doors
//    - Leave it when distracted

// 4. Week 7-8: Socialization and manners
//    - Sit-stay in the presence of distractions
//    - Walk on a loose leash
//    - Good behavior around other dogs

// 5. Week 9-10: Practice and refinement
//    - Repeat and refine all previously learned commands
//    - Introduce new distractions and environments

// 6. Week 11-12: Final assessment and advanced training options
//    - Participants demonstrate mastery of all commands
//    - Introduction to agility or trick training for interested participants

// Each week, participants would practice these commands in various settings, with increasing levels of distraction, to ensure that their dogs are well-prepared for real-world situations.

