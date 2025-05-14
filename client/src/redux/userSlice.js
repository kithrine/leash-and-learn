import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
  loading: false,
  user: {
    firstName: "",
    lastName: "",
    email: "", // **** Added this
    username: "",
    avatar: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    role: [],
    dogs: [],
    token: "",
  },
  users: []
}

// User Get All
export const userGetAll = createAsyncThunk("user/getAll", async () => {
  const response = await userService.userGetAll()
  // console.log(response)
  return response.data
})

// User Get Many
export const userGetMany = createAsyncThunk("user/getMany", async (type) => {
  const { userType } = type
  // console.log("userType", userType)
  const response = await userService.userList(userType)
  // console.log(response)
  return response.data
})

// User Get One
export const userGetOne = createAsyncThunk("user/getOne", async (email) => {
  const response = await userService.userGetOne(email)
  console.log(response)
  return response.data
})

// User Create
export const userCreate = createAsyncThunk("user/create", async (userForm) => {
  const response = await userService.userCreate(userForm)
  // console.log(response)
  return response.data
})

// User Update
export const userUpdate = createAsyncThunk("user/update", async ({userEditProfileForm, id}) => {
  const response = await userService.userUpdate(userEditProfileForm, id)
  // console.log(response)
  return response.data
})

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // User Get All
      .addCase(userGetAll.pending, (state, action) => {
        // console.log("userSlice userGetAll.pending", action.payload)
        state.loading = true
      })
      .addCase(userGetAll.fulfilled, (state, action) => {
        // console.log("userSlice userGetAll.fulfilled", action.payload)
        state.loading = false
        state.users = action.payload.users
      })
      .addCase(userGetAll.rejected, (state, action) => {
        // console.log("userSlice userGetAll.rejected", action.payload)
        state.loading = false
      })

      // User Get Many
      .addCase(userGetMany.pending, (state, action) => {
        // console.log("userSlice userGetMany.pending", action.payload)
        state.loading = true
      })
      .addCase(userGetMany.fulfilled, (state, action) => {
        // console.log("userSlice userGetMany.fulfilled", action.payload)
        state.loading = false
        state.users = action.payload.users
      })
      .addCase(userGetMany.rejected, (state, action) => {
        // console.log("userSlice userGetMany.rejected", action.payload)
        state.loading = false
      })

      // User Get One
      .addCase(userGetOne.pending, (state, action) => {
        console.log("userSlice userGetOne.pending", action.payload)
        state.loading = true
      })
      .addCase(userGetOne.fulfilled, (state, action) => {
        console.log("userSlice userGetOne.fulfilled", action.payload)
        state.loading = false
        state.user = action.payload
      })
      .addCase(userGetOne.rejected, (state, action) => {
        console.log("userSlice userGetOne.rejected", action.payload)
        state.loading = false
      })

      // User Create
      .addCase(userCreate.pending, (state, action) => {
        // console.log("userSlice userCreate.pending", action.payload)
        state.loading = true
      })
      .addCase(userCreate.fulfilled, (state, action) => {
        // console.log("userSlice userCreate.fulfilled", action.payload)
        state.loading = false
      })
      .addCase(userCreate.rejected, (state, action) => {
        // console.log("userSlice userCreate.rejected", action.payload)
        state.loading = false
      })

      // User Update
      .addCase(userUpdate.pending, (state, action) => {
        console.log("userSlice userUpdate.pending", action.payload)
        state.loading = true
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        console.log("userSlice userUpdate.fulfilled", action.payload)
        state.loading = false
        state.user = action.payload.user
      })
      .addCase(userUpdate.rejected, (state, action) => {
        console.log("userSlice userUpdate.rejected", action.payload)
        state.loading = false
      })
  }
})

export default userSlice.reducer
