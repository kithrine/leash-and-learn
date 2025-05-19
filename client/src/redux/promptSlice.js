import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import promptService from "./promptService";

const initialState = {
  loading: false,
  success: false,
  prompt: {
    question: "",
    answer: "",
    model: "",
    date: ""
  },
  prompts: [
    {
      question: "",
      answer: "",
      model: "",
      date: ""
    },
  ],
};

export const addPrompt = createAsyncThunk("prompt/add", async (promptForm) => {
  const response = await promptService.addPrompt(promptForm);
  return response.data;
});

export const getPromptsByEmail = createAsyncThunk("prompt/getMany", async (email = "") => {
  console.log("redux getPromptsByEmail");
  const response = await promptService.getPromptsByEmail(email);
  console.log("redux getPromptsByEmail response", response);
  return response.data;
});


export const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    promptSearched(state, action) {
        console.log("promptSearched searchText", action.payload)
        state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // // List of all prompts and answers
      .addCase(getPromptsByEmail.pending, (state, action) => {
        // console.log("promptSlice getPromptsByEmail.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getPromptsByEmail.fulfilled, (state, action) => {
        // console.log("promptSlice getPromptsByEmail.fulfilled", action.payload);
        // console.log(action.payload.prompts);
        state.loading = false;
        state.prompts = action.payload.prompts;
        state.success = true;
      })
      .addCase(getPromptsByEmail.rejected, (state, action) => {
        // console.log("promptSlice getPromptsByEmail.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Add Prompt
      .addCase(addPrompt.pending, (state, action) => {
        console.log("promptSlice addPrompt.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addPrompt.fulfilled, (state, action) => {
        console.log("promptSlice addPrompt.fulfilled", action.payload);
        console.log(action.payload.prompt);
        state.loading = false;
        state.success = true;
        state.prompt = action.payload.prompt
      })
      .addCase(addPrompt.rejected, (state, action) => {
        console.log("promptSlice addPrompt.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })
  },
});

export const { promptSearched } = promptSlice.actions;

export default promptSlice.reducer;