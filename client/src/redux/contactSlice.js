import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contactService from './contactService'

const initialState = {
  loading: false,
  contact: 
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    },
  contacts: []
}

export const contactGetAll = createAsyncThunk("contact/getAll", async () => {
  console.log("redux contactGetAll contact")
  const response = await contactService.contactGetAll()
  console.log("redux contactGetAll contact response", response)
  return response.data
})

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // Contacts (Get All)
      .addCase(contactGetAll.pending, (state, action) => {
        console.log("contactSlice contactGetAll.pending", action.payload)
        state.loading = true
      })
      .addCase(contactGetAll.fulfilled, (state, action) => {
        console.log("contactSlice contactGetAll.fulfilled", action.payload)
        state.loading = false
        state.contacts = action.payload.contacts
      })
      .addCase(contactGetAll.rejected, (state, action) => {
        console.log("contactSlice contactGetAll.rejected", action.payload)
        state.loading = false
      })
      
  }
})

export default contactSlice.reducer
