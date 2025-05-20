import chatModel from "./chatModel.js"
import axios from "axios"

const chatCreate =  async (req, res) => {
  // const { prompt } = req.body
  const {  email, prompt, model } = req.body
  console.log("prompt, model", email, prompt, model)
  // Validation
  if (
    (!prompt || prompt == "")
  ) {
    res.status(500).json({ "message": "Chat input not valid."})
  } 
  else {
    
    const response = await axios.post(`${process.env.OLLAMA_API_URL}`, { prompt, model: "gemma2" })
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

    // const chats = await chatModel.find({email})

    res.status(200).json({ "success": true, "message": "Chat created.", chat: chatResponse })
    // res.status(200).json({ "success": true, "message": "Chat created.", chat: chats })
  }
}

export default chatCreate

// const getChats = await chatModel.find({ $or: [{"users.email": email}, {"trainer.email": email }] })