import chatModel from "./chatModel.js"

const chatGetMany =  async (req, res) => {

  const { email } = req.params
  console.log("Chat user email", email)
  // Validation
  if (!email || email === "") {
    res.status(500).json({ "message": "Can not get chat."})
  } 
  else {
    // const getChats = await chatModel.find({ $or: [{"users.email": email}, {"trainer.email": email }] })
    const getChats = await chatModel.find({email})
    console.log("getChats", getChats)
    res.status(200).json({ "success": true, "chats": getChats })
  }
}

export default chatGetMany
