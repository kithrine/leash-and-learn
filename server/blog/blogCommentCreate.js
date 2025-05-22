import blogModel from "./blogModel.js"

const blogCommentCreate =  async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, username, avatar, comment, timestamp } = req.body;
  // const { comment} = req.body;
 
  // Validation
  if (
    (!comment || comment == "") 
    // (!lastName || lastName) == "" ||
    // (!username || username == "") ||
    // !comment || comment == "" ||
    // (timestamp == "") 
  ) {
    res.status(500).json({ "message": "Blog comment information not valid."})
  } 
  else {
    const newComment = await blogModel.find({_id: id})
    console.log("new comment", newComment)
    console.log("new comment.comments", newComment[0].comments)
    const tempComment = {firstName, lastName, username, avatar, comment, timestamp}

    newComment[0].comments.push(tempComment)
    console.log("newComment", newComment)
    console.log("newComment array", newComment[0].comments)

    const addComment = await blogModel.findOne({_id: id} )
    addComment.comments.push( tempComment )
    addComment.save()

    console.log("addComment", addComment)
    // {firstName, lastName, username, comment, timestamp})
    // console.log("createComment", createComment)

    // const createComment = await blogModel.create({ firstName, lastName, username, comment, timestamp })
    // console.log("createComment", createComment)

    res.status(200).json({ "success": true, "message": "Blog comment created.", blog: addComment})
  }
}

export default blogCommentCreate