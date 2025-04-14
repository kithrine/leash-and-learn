import axios from "axios";

const trainingClassService = {
  trainingClassGetAll: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/training-classes`
    )
  },
  trainingClassGetMany: async (username) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/training-classes/${username}`
    )
  },
  trainingClassGetOne: async (id) => {
     return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/training-classes/detail/${id}`
    );
  },
  trainingClassCreate: async (trainingClassForm) => {
    // console.log(`${import.meta.env.VITE_NODE_SERVER_URL}/training-classes`)
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/training-classes`,
      trainingClassForm
    )
  },
  trainingClassUpdate: async (trainingClassId, trainingClassEditForm) => {
    // console.log(`${import.meta.env.VITE_NODE_SERVER_URL}/training-classes`)
    console.log("trainingClassId", trainingClassId, "trainingClassEditForm", trainingClassEditForm)
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/training-classes/${trainingClassId}`,
      trainingClassEditForm
    ) 
  },
  trainingClassSessionUpdate: async (trainingClassId, sessionId, sessionEditForm) => {
    // console.log(`${import.meta.env.VITE_NODE_SERVER_URL}/training-classes/sessions`)
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/training-classes/${trainingClassId}/sessions/${sessionId}`,
      sessionEditForm
    )
  },
  trainingClassSessionDelete: async (trainingClassId, sessionId) => {
    console.log(`${import.meta.env.VITE_NODE_SERVER_URL}/training-classes/sessions`)
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/training-classes/${trainingClassId}/sessions/${sessionId}`
    )
  },
  
}

export default trainingClassService