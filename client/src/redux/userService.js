import axios from 'axios'

const userService = {
  userList: async (userType) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/list/${userType}`
    )
  },
  userGetAll: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/list`
    )
  },
  userCreate: async (userForm) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users`, userForm
    )
  },
  userUpdate: async (userForm, email) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/${email}`, userForm
    )
  },
  
}

export default userService
