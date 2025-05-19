import promptModel from "./promptModel.js"
import axios from "axios"

const promptCreate =  async (req, res) => {
  const { prompt, model } = req.body
  console.log("prompt,model", prompt, model)
  // Validation
  if (
    (!prompt || prompt == "")
  ) {
    res.status(500).json({ "message": "Prompt input not valid."})
  } 
  else {
    
    const response = await axios.post(`${process.env.OLLAMA_API_URL}`, { prompt, model })
    console.log("response", response)

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

    const promptResponse = await promptModel.create({ prompt, model, answer: responseText })
    console.log("promptResponse", promptResponse)

    res.status(200).json({ "success": true, "message": "Prompt created.", prompt: promptResponse })
  }
}

export default promptCreate
