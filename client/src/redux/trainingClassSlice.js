import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trainingClassService from "./trainingClassService";

const initialState = {
  loading: false,
  trainingClass: {
    trainingClassType: "",
    trainer: "",
    trainingClassName: "",
    trainingClassDescription: "",
    startDate: "",
    endDate: "",
    customers: [],
    sessions: [],
  },
  trainingClasses: [
    // {
    //   trainingClassType: "",
    //   trainer: "",
    //   trainingClassName: "",
    //   trainingClassDescription: "",
    //   startDate: "",
    //   endDate: "",
    //   customers: []
    // }
  ],
};

// Training Class (Get All)
export const trainingClassGetAll = createAsyncThunk(
  "trainingClass/getAll",
  async () => {
    const response = await trainingClassService.trainingClassGetAll();
    // console.log("redux trainingClassGetAll", response);
    return response.data;
  }
);

// Training Class (Get Many)
export const trainingClassGetMany = createAsyncThunk(
  "trainingClass/getMany",
  async (username = "") => {
    // console.log("redux trainingClassGetMany username", username);
    const response = await trainingClassService.trainingClassGetMany(username);
    // console.log("redux trainingClassGetMany username", response);
    return response.data;
  }
);

// Training Class (Get One)
export const trainingClassGetOne = createAsyncThunk(
  "trainingClass/getOne",
  async (id) => {
    // console.log("redux trainingClassGetOne id", id);
    const response = await trainingClassService.trainingClassGetOne(id);
    // console.log("redux trainingClassGetOne id", response);
    return response.data;
  }
);

// Training Class Create
export const trainingClassCreate = createAsyncThunk(
  "trainingClass/create",
  async (trainingClassForm) => {
    // console.log(
    //   "redux trainingClassCreate trainingClassForm",
    //   trainingClassForm
    // );
    const response = await trainingClassService.trainingClassCreate(
      trainingClassForm
    );
    // console.log(response);
    return response.data;
  }
);

// Training Class Update
export const trainingClassUpdate = createAsyncThunk(
  "trainingClass/trainingClassUpdate",
  async (trainingClassInfo) => {
    const {trainingClassId, trainingClassEditForm} = trainingClassInfo
    console.log(
      "redux trainingClassUpdate trainingClass update",
      trainingClassInfo, trainingClassEditForm
    );
    console.log(
      "trainingClassUpdate trainingClassId, trainingClassEditForm",
      trainingClassId,
      trainingClassEditForm
    );
    const response = await trainingClassService.trainingClassUpdate(
      trainingClassId,
      trainingClassEditForm
    );
    console.log("redux trainingClassUpdate trainingClass response", response
    );
    return response.data;
  }
);

// Session Update
export const trainingClassSessionUpdate = createAsyncThunk(
  "trainingClass/sessionUpdate",
  async (sessionInfo) => {
    console.log(
      "redux trainingClassSessionUpdate trainingClass session",
      sessionInfo
    );
    const { trainingClassId, sessionId, sessionEditForm } = sessionInfo;
    console.log(
      "trainingClassSessionUpdate sessionId, sessionEditForm",
      sessionId,
      sessionEditForm
    );
    const response = await trainingClassService.trainingClassSessionUpdate(
      trainingClassId,
      sessionId,
      sessionEditForm
    );
    console.log("redux trainingClassSessionUpdate trainingClass response", response
    );
    return response.data;
  }
);

// Session Delete
export const trainingClassSessionDelete = createAsyncThunk(
  "trainingClass/sessionDelete",
  async (sessionInfo) => {
    console.log("redux trainingClassSessionDelete trainingClass session", sessionInfo);
    const { trainingClassId, sessionId } = sessionInfo;
    console.log("trainingClassSessionDelete sessionId, session", trainingClassId, sessionId);
    const response = await trainingClassService.trainingClassSessionDelete(
      trainingClassId,
      sessionId
    );
    console.log(
      "redux trainingClassSessionDelete trainingClass response",
      response
    );
    return response.data;
  }
);


// Builders
export const trainingClassSlice = createSlice({
  name: "trainingClass",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Training Classes (Get All)
      .addCase(trainingClassGetAll.pending, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetAll.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(trainingClassGetAll.fulfilled, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetAll.fulfilled",
        //   action.payload
        // );
        state.loading = false;
        state.trainingClasses = action.payload.trainingClasses;
      })
      .addCase(trainingClassGetAll.rejected, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetAll.rejected",
        //   action.payload
        // );
        state.loading = false;
      })

      // Training Classes (Get Many)
      .addCase(trainingClassGetMany.pending, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetMany.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(trainingClassGetMany.fulfilled, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetMany.fulfilled",
        //   action.payload
        // );
        state.loading = false;
        state.trainingClasses = action.payload.trainingClasses;
      })
      .addCase(trainingClassGetMany.rejected, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetMany.rejected",
        //   action.payload
        // );
        state.loading = false;
      })

      // Training Class (Get One)
      .addCase(trainingClassGetOne.pending, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetOne.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(trainingClassGetOne.fulfilled, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetOne.fulfilled",
        //   action.payload
        // );
        state.loading = false;
        state.trainingClass = action.payload.trainingClass;
      })
      .addCase(trainingClassGetOne.rejected, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassGetOne.rejected",
        //   action.payload
        // );
        state.loading = false;
      })

      // Create a Training Class
      .addCase(trainingClassCreate.pending, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassCreate.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(trainingClassCreate.fulfilled, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassCreate.fulfilled",
        //   action.payload
        // );
        state.loading = false;
      })
      .addCase(trainingClassCreate.rejected, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassCreate.rejected",
        //   action.payload
        // );
        state.loading = false;
      })

      // Update Training Class Detail
      .addCase(trainingClassUpdate.pending, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassUpdate.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(trainingClassUpdate.fulfilled, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassUpdate.fulfilled",
        //   action.payload
        // );
        state.loading = false;
        state.trainingClass = action.payload.trainingClass;
      })
      .addCase(trainingClassUpdate.rejected, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassUpdate.rejected",
        //   action.payload
        // );
        state.loading = false;
      })

      // Update One Training Class Session
      .addCase(trainingClassSessionUpdate.pending, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassSessionUpdate.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(trainingClassSessionUpdate.fulfilled, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassSessionUpdate.fulfilled",
        //   action.payload
        // );
        state.loading = false;
        state.trainingClass = action.payload.trainingClass;
      })
      .addCase(trainingClassSessionUpdate.rejected, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassSessionUpdate.rejected",
        //   action.payload
        // );
        state.loading = false;
      })

      // Delete One Training Class Session
      .addCase(trainingClassSessionDelete.pending, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassSessionDelete.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(trainingClassSessionDelete.fulfilled, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassSessionDelete.fulfilled",
        //   action.payload
        // );
        state.loading = false;
        state.trainingClass = action.payload.trainingClass;
      })
      .addCase(trainingClassSessionDelete.rejected, (state, action) => {
        // console.log(
        //   "trainingClassSlice trainingClassSessionDelete.rejected",
        //   action.payload
        // );
        state.loading = false;
      });
  },
});

export default trainingClassSlice.reducer;
