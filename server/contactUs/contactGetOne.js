import contactModel from "./contactModel.js";

const contactGetOne = async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findOne({ _id: id });
  res.status(200).json(contact);
};

export default contactGetOne;