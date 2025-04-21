import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {
    firstName: "",
    lastName: "",
    email: "", // **** Added this
    username: "",
    avatar: "",
    role: [],
    token: ""
  }
}

export const authLogin = createAsyncThunk("auth/login", async (credentials) => {
  const { email, password } = credentials
  // console.log("authLogin:", username, password)
  const response = await authService.authLogin(email, password)
  // console.log(response)
  return response.data
})

export const checkLogin = createAsyncThunk("auth/checkLogin", async (token) => {
  const response = await authService.checkLogin(token)
  // console.log(response)
  return response.data
})

export const logout = createAsyncThunk("auth/logout", async (token) => {
  const response = await authService.logout(token)
  // console.log(response)
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Login
      .addCase(authLogin.pending, (state, action) => {
        state.loading = true
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.loading = false
        state.isLoggedIn = true
        state.user = { ...action.payload.user }
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false
      })
      
      // Check login
      .addCase(checkLogin.pending, (state, action) => {
        state.loading = true
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.loading = false
        state.isLoggedIn = true
        state.user = { ...action.payload.user }
      })
      .addCase(checkLogin.rejected, (state, action) => {
        state.loading = false
      })

      // Logout 
      .addCase(logout.pending, (state, action) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        // console.log(action.payload)
        // Clear sessionStorage
        // sessionStorage.removeItem("token");
        state.loading = false
        state.isLoggedIn = false
        state.user = { 
          firstName: "",
          lastName: "",
          email: "", // **** Added this
          username: "",
          role: [],
          token: "" }
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default authSlice.reducer
