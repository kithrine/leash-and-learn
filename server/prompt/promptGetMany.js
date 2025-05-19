import promptModel from "./promptModel.js"

const promptGetMany =  async (req, res) => {

  const { email } = req.params
  console.log("Prompt user email", email)
  // Validation
  if (!email || email === "") {
    res.status(500).json({ "message": "Can not get prompt."})
  } 
  else {
    // const getPrompts = await promptModel.find({ $or: [{"users.email": email}, {"trainer.email": email }] })
    const getPrompts = await promptModel.find({"users.email": email})
    console.log("getPrompts", getPrompts)
    res.status(200).json({ "success": true, "prompts": getPrompts })
  }
}

export default promptGetMany
