import blogModel from "./blogModel.js";

const blogCreate = async (req, res) => {
  const { userId, title, authorFirstName, authorLastName, authorTitle, avatar, category, subCategory, readTime, body, coverPhoto, comments } = req.body;
  // Validation goes here
  const blog = await blogModel.create({
    userId,
    title,
    authorFirstName,
    authorLastName,
    authorTitle,
    avatar,
    category,
    subCategory,
    readTime,
    body, 
    coverPhoto,
    comments
  });
  console.log("blog", blog);
  res.status(200).json({ success: true, blog: blog });
};

export default blogCreate;

//   title: String,
//   authorFullName: String,
//   authorTitle: String,
//   avatar: String,
//   category: String,
//   subCategory: String,
//   readTime: String,
//   body: String,
//   coverPhoto: String,
//   date: { type: Date, default: Date.now },
//   comments: [{
//     firstName: String,
//     lastName: String,
//     username: String,
//     comment: String,
//     timestamp: { type: Date, default: Date.now}
//   }]
