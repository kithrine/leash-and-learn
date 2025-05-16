import axios from 'axios'

const userService = {
  userGetAll: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/list`
    )
  },
  userList: async (userType) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/list/${userType}`
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
  createDog: async (userId, addDogForm) => {
    console.log("createDog Service", userId)
    console.log("addDogForm", addDogForm)
    const createDogInfo = { userId, addDogForm}
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/${userId}/dogs`,
      createDogInfo
    )
  },
  updateDog: async (userId, dogId, editDogForm) => {
    const updateDogInfo = { userId, dogId, editDogForm}
    console.log("all 3 things in userService for updating Dog", updateDogInfo)
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/${userId}/dogs/${dogId}`,
      updateDogInfo
    )
  }
  
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
