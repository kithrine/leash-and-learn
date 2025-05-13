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
  userUpdate: async (userEditProfileForm, id) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/${id}`, userEditProfileForm
    )
  },
  
}

export default userService

// // HELP WITH TROUBLESHOOTING
// userUpdate: async (userEditProfileForm, id) => {
// const response = await axios.put(
//   `${import.meta.env.VITE_NODE_SERVER_URL}/users/${id}`, userEditProfileForm
// ) 
// console.log("service response", response.data)
// return response.data
// }
