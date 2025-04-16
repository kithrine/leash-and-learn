import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import trainingClassReducer from "./redux/trainingClassSlice";
import builderReducer from "./redux/builderSlice";
import userReducer from './redux/userSlice'
import contactReducer from "./redux/contactSlice"
import { listenerMiddleware } from "./redux/sessionStorageMiddleware";

const preloadedState = () => {
  if (sessionStorage.getItem("token") !== null)
    return {
      auth: {
        loading: false,
        isLoggedIn: false,
        user: {
          firstName: "",
          lastName: "",
          email: "", // **** Added this
          username: "",
          role: [],
          token: sessionStorage.getItem("token"),
        },
      },
    };
  return undefined;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trainingClass: trainingClassReducer,
    builder: builderReducer,
    users: userReducer,
    contact: contactReducer
  },
  preloadedState: preloadedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});
