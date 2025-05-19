import promptModel from "./promptModel.js";

const promptGetOne = async (req, res) => {
  const { id } = req.params;
  const prompt = await promptModel.findOne({ _id: id });
  res.status(200).json(prompt);
};

export default promptGetOne;
