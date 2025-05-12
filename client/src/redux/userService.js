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
  userGetOne: async (email) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/user/${email}`
    )
  },
  userCreate: async (userForm) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users`, userForm
    )
  },
  userUpdate: async (userEditProfileForm, email) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/${email}`, userEditProfileForm
    )
  },
  
}

export default userService
