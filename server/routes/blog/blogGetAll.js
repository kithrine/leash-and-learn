import blogModel from "./blogModel.js"

const blogGetAll = async (req, res) => {
  
  const blogs = await blogModel.find()
  console.log("blogs", blogs)
  res.status(200).json({ success: true, "blogs": blogs });
};

export default blogGetAll;

