import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import chatService from "./chatService";

const initialState = {
  loading: false,
  success: false,
  chat: {
    email: "",
    prompt: "",
    answer: "",
    model: "",
    date: ""
  },
  chats: [],
};

export const addChat = createAsyncThunk("chat/add", async (chatForm) => {
  const response = await chatService.addChat(chatForm);
  return response.data;
});

export const getChatsByEmail = createAsyncThunk("chat/getMany", async (email = "") => {
  console.log("redux getChatsByEmail");
  const response = await chatService.getChatsByEmail(email);
  console.log("redux getChatsByEmail response", response);
  return response.data;
});


export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatSearched(state, action) {
        console.log("chatSearched searchText", action.payload)
        state.searchText = action.payload
    },
    chatLogout: (state) => {
      console.log("chatLogout refreshChats")
      state.chats = []
    }

  },
  extraReducers: (builder) => {
    builder
      // // List of all chats and answers
      .addCase(getChatsByEmail.pending, (state, action) => {
        // console.log("chatSlice getChatsByEmail.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getChatsByEmail.fulfilled, (state, action) => {
        // console.log("chatSlice getChatsByEmail.fulfilled", action.payload);
        // console.log(action.payload.chats);
        state.loading = false;
        state.chats = action.payload.chats;
        state.success = true;
      })
      .addCase(getChatsByEmail.rejected, (state, action) => {
        // console.log("chatSlice getChatsByEmail.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Add Chat
      .addCase(addChat.pending, (state, action) => {
        console.log("chatSlice addChat.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addChat.fulfilled, (state, action) => {
        console.log("chatSlice addChat.fulfilled", action.payload);
        console.log(action.payload.chat);
        state.loading = false;
        state.success = true;
        state.chat = action.payload.chat
      })
      .addCase(addChat.rejected, (state, action) => {
        console.log("chatSlice addChat.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })
  },
});

export const { chatSearched, chatLogout } = chatSlice.actions;

export default chatSlice.reducer;