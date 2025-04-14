import contactModel from "../../schemas/contactModel.js"

const contactGetAll = async (req, res) => {
  const getContacts = await contactModel.find()
  res.status(200).json({ "success": true, "contacts": getContacts })

}

export default contactGetAll