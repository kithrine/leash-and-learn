import contactModel from "../../schemas/contactModel.js";

const contactCreate = async (req, res) => {
  const {     
    firstName,
    lastName,
    email,
    phone,
    message
   } = req.body
  // Validation goes here
  const contact = await contactModel.create({ 
    firstName,
    lastName,
    email,
    phone,
    message
  })
  console.log("contact", contact)
  res.status(200).json({ "success": true, "contact": contact })
}

export default contactCreate
