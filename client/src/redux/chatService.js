import axios from "axios";

const chatService = {
  getChatsByEmail: async (email) => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/chat/${email}`)
  },
  addChat: async (chatForm) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/chat`,
      chatForm,
      { headers: { "Content-Type": "application/json" } }
    );
  },
 

};

export default chatService;