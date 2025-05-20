import chatModel from "./chatModel.js";

const chatGetOne = async (req, res) => {
  const { id } = req.params;
  const chat = await chatModel.findOne({ _id: id });
  res.status(200).json(chat);
};

export default chatGetOne;
