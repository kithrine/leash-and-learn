import contactModel from "./contactModel.js";

const contactDelete = async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findOneAndDelete({ _id: id });
  res.status(200).json({ "success": true })
};

export default contactDelete;
