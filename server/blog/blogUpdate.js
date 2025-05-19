import blogModel from "./blogModel.js"

const blogUpdate = async (req, res) => {
  const { id } = req.params
  const {
    title,
    authorFullName,
    authorTitle,
    avatar,
    category,
    subCategory,
    readTime,
    body,
    coverPhoto,
    comments
  } = req.body
  // Validation goes here
  const date = new Date()
  const blog = await blogModel.findOneAndUpdate(
    { _id: id },
    {
      title,
      authorFullName,
      authorTitle,
      avatar,
      category,
      subCategory,
      readTime,
      body,
      coverPhoto,
      comments
    }, { new: true }
  )
  console.log("blog", blog)
  res.status(200).json({ success: true, blog: blog })
}

export default blogUpdate
