import axios from "axios";

const contactService = {
  contactGetAll: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/contact`
    )
  }
}

export default contactService