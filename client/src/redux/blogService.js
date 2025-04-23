import axios from "axios";

const blogService = {
  blogGetAll: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/blog`);
  },
  addBlog: async (title, authorFullName, authorTitle, avatar, category, subCategory, readTime, body, coverPhoto, comments) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/blog`,
      { title, authorFullName, authorTitle, avatar, category, subCategory, readTime, body, coverPhoto, comments},
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
  blogGetOne: async (id) => {
    console.log("top get blog")
    return await axios.get(
    `${import.meta.env.VITE_NODE_SERVER_URL}/blog/${id}`
    )
  },
  deleteBlog: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/blog/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default blogService;
