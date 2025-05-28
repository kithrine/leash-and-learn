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
      date: "",
      subject: "",
      message: ""
    },
  contacts: []
}

export const contactGetAll = createAsyncThunk("contact/getAll", async () => {
  // console.log("redux contactGetAll contact")
  const response = await contactService.contactGetAll()
  // console.log("redux contactGetAll contact response", response)
  return response.data
})

export const getOneContact = createAsyncThunk("contact/getOne", async (id) => {
  const response = await contactService.getOneContact(id)
  return response.data;
})

export const contactAdd = createAsyncThunk("contact/add", async (contactForm) => {
  const response = await contactService.contactAdd(contactForm);
  return response.data;
});

export const contactDelete = createAsyncThunk("contact/delete", async (id) => {
  const response = await contactService.contactDelete(id);
  return response.data;
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // Contacts (Get All)
      .addCase(contactGetAll.pending, (state, action) => {
        // console.log("contactSlice contactGetAll.pending", action.payload)
        state.loading = true
      })
      .addCase(contactGetAll.fulfilled, (state, action) => {
        // console.log("contactSlice contactGetAll.fulfilled", action.payload)
        state.loading = false
        state.contacts = action.payload.contacts
      })
      .addCase(contactGetAll.rejected, (state, action) => {
        // console.log("contactSlice contactGetAll.rejected", action.payload)
        state.loading = false
      })

      // Contact (Get One)
      .addCase(getOneContact.pending, (state, action) => {
        // console.log("contactSlice getOneContact.pending", action.payload)
        state.loading = true
      })
      .addCase(getOneContact.fulfilled, (state, action) => {
        // console.log("contactSlice getOneContact.fulfilled", action.payload)
        state.loading = false
        state.contact = action.payload
      })
      .addCase(getOneContact.rejected, (state, action) => {
        // console.log("contactSlice getOneContact.rejected", action.payload)
        state.loading = false
      })

      // Add Contact message
      .addCase(contactAdd.pending, (state, action) => {
        console.log("contactSlice contactAdd.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(contactAdd.fulfilled, (state, action) => {
        console.log("contactSlice contactAdd.fulfilled", action.payload);
        console.log(action.payload.contact);
        state.loading = false;
        state.success = true;
      })
      .addCase(contactAdd.rejected, (state, action) => {
        console.log("contactSlice contactAdd.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Delete Contact message
      .addCase(contactDelete.pending, (state, action) => {
        console.log("contactSlice contactDelete.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(contactDelete.fulfilled, (state, action) => {
        console.log("contactSlice contactDelete.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.contacts = action.payload.contacts;
        state.success = true;
      })
      .addCase(contactDelete.rejected, (state, action) => {
        console.log("contactSlice contactDelete.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })
      
  }
})

export default contactSlice.reducer
