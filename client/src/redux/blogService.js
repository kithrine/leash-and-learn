import axios from "axios";

const blogService = {
  blogGetAll: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/blog`);
  },
  blogGetOne: async (id) => {
    // console.log("top get blog")
    return await axios.get(
    `${import.meta.env.VITE_NODE_SERVER_URL}/blog/${id}`
    )
  },
  addBlog: async (title, authorFirstName, authorLastName, authorTitle, avatar, category, subCategory, readTime, body, coverPhoto, comments) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/blog`,
      { title, authorFirstName, authorLastName, authorTitle, avatar, category, subCategory, readTime, body, coverPhoto, comments},
      { headers: { "Content-Type": "application/json" } }
    );
  },
  updateBlog: async (id, blogEditForm) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/blog/${id}`,
      blogEditForm,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  deleteBlog: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/blog/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  addBlogComment: async (id, addComment) => {
    console.log(`${import.meta.env.VITE_NODE_SERVER_URL}/blog/comments`)
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/blog/${id}/comments`,
      addComment
    )
  },
  updateBlogComment: async (blogId, commentId, commentEditForm) => {
    console.log("all 3 of these", blogId, commentId, commentEditForm)
    // console.log(`${import.meta.env.VITE_NODE_SERVER_URL}/blog/comments`)
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/blog/${blogId}/comments/${commentId}`,
      commentEditForm
    )
  },
  deleteBlogComment: async (blogId, commentId) => {
    console.log(`${import.meta.env.VITE_NODE_SERVER_URL}/blog/comments`)
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/blog/${blogId}/comments/${commentId}`
    )
  },
};

export default blogService;
