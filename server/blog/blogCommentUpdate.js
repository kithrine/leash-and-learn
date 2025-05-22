import blogModel from "./blogModel.js";

const blogCommentUpdate = async (req, res) => {
  const { blogId, commentId } = req.params 
  const { _id, firstName, lastName, username, avatar, comment, timestamp } = req.body;
  console.log(commentId, firstName, lastName, username, avatar, comment, timestamp)

  // Validation
  if (
    (!comment || comment == "")
    // (!firstName || firstName) == "" ||
    // (!lastName || lastName == "") ||
    // (!username || username == "") ||
    // (timestamp == "") ||
  ) {
    res.status(500).json({ message: "Blog Comment information not valid." });
  } else {
    const updateComment = await blogModel.findOneAndUpdate(
      // { "comments._id": _id },
      { _id: blogId, "comments._id": _id },
      { "$set": { "comments.$": { firstName, lastName, username, avatar, comment, timestamp } } },
      { new: true }
    );
    console.log("updateComment", updateComment);

    res.status(200).json({ success: true, message: "Session updated.", blog: updateComment });
  }
};

export default blogCommentUpdate;