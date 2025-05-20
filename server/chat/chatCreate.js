import chatModel from "./chatModel.js"
import axios from "axios"

const chatCreate =  async (req, res) => {
  // const { prompt } = req.body
  const { model, prompt } = req.body
  console.log("prompt, model", model, prompt)
  // Validation
  if (
    (!prompt || prompt == "")
  ) {
    res.status(500).json({ "message": "Prompt input not valid."})
  } 
  else {
    
    const response = await axios.post(`${process.env.OLLAMA_API_URL}`, { model: "gemma2", prompt })
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

    const chatResponse = await chatModel.create({ prompt, model, answer: responseText })
    console.log("chatResponse", chatResponse)

    res.status(200).json({ "success": true, "message": "Chat created.", chat: chatResponse })
  }
}

export default chatCreate
