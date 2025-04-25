import express from "express";
import blogCreate from "./blogCreate.js";
import blogGetAll from "./blogGetAll.js";
import blogGetOne from "./blogGetOne.js";
import blogUpdate from "./blogUpdate.js";
import blogDelete from "./blogDelete.js";
import blogCommentCreate from "./blogCommentCreate.js";
import blogCommentDelete from "./blogCommentDelete.js";

const blogIndex = express.Router();

// Create blog API
blogIndex.post("/", blogCreate);

// Read all blogs
blogIndex.get("/", blogGetAll);

// Read one blog
blogIndex.get("/:id", blogGetOne);

// Update one blog
blogIndex.put("/:id", blogUpdate);

// Delete one blog
blogIndex.delete("/:id", blogDelete);

// Blog comment create
blogIndex.post("/:id/comments", blogCommentCreate)

// Blog comment delete
blogIndex.delete("/:blogId/comments/:commentId", blogCommentDelete)


export default blogIndex;
