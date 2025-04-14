import axios from 'axios'

const userService = {
  userList: async (userType) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/list/${userType}`
    )
  }
}

export default userService
