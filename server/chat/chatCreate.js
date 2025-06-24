import chatModel from "./chatModel.js"
import axios from "axios"

const chatCreate =  async (req, res) => {
  // const { prompt } = req.body
  const {  email, prompt, model } = req.body
  console.log("prompt, model", email, prompt, model)

  const modelInstructions = "You are an AI Chatbot for a Dog Training business website called Leash & Learn. The training services we offer are Basic Obedience, Behavior Modification, Puppy Socialization, Agility, Advanced Obedience, and Service & Therapy Dog Training. We use positive reinforcement as our training technique. There also is a Community Blog on the site that features content about not only dog training, but anything to do with dogs in general. You must have an account in order to post a blog or comment on a blog, but the blog posts are open to the public to view. The different Blog categories include: Foundational Training, Advanced Training, Training Tools & Techniques, Specific Breed Focus, Dog Behavior, Health & Wellness, Dog Care, Everything Puppies! Community & Lifestyle, Fun & Entertainment, DIY, Heartwarming Stories, and Products & Reviews. You must have an account in order to enroll in a Training Class. Please answer questions that a user may have as if you are a staff member for Leash & Learn."


  // Validation
  if (
    (!prompt || prompt == "")
  ) {
    res.status(500).json({ "message": "Chat input not valid."})
  } 
  else {
    
    const response = await axios.post(`${process.env.OLLAMA_API_URL}`, { prompt: modelInstructions + prompt, model: "gemma2" })
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!response", response)



    let responseText = ""
    const responseLines = response.data.split("\n")
    for (const d of responseLines) {
      try {
        const obj = JSON.parse(d)
        responseText += obj.response
        // console.log(obj)
      } catch (err) {
        console.log("This llama won't hunt!")
      }
    }
    console.log("responseText", responseText)

    const chatResponse = await chatModel.create({ email, prompt, model, answer: responseText })
    console.log("chatResponse", chatResponse)

    const chats = await chatModel.find({email})
    console.log("&&&&&&&&&chats", chats)

    // res.status(200).json({ "success": true, "message": "Chat created.", chat: chatResponse })
    res.status(200).json({ "success": true, "message": "Chat created.", chats: chats })
  }
}

export default chatCreate

// const getChats = await chatModel.find({ $or: [{"users.email": email}, {"trainer.email": email }] })