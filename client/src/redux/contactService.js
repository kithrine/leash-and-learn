import axios from "axios";

const contactService = {
  contactGetAll: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/contact`
    )
  },

  getOneContact: async (id) => {
    return await axios.get(
    `${import.meta.env.VITE_NODE_SERVER_URL}/contact/${id}`
    )
  },

  contactAdd: async (contactForm) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/contact`,
      contactForm,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  contactDelete: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/contact/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
}

export default contactService