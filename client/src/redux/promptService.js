import axios from "axios";

const promptService = {
  getPromptsByEmail: async (email) => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/prompt/${email}`)
  },
  addPrompt: async (promptForm) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/prompt`,
      promptForm,
      { headers: { "Content-Type": "application/json" } }
    );
  },
 

};

export default promptService;