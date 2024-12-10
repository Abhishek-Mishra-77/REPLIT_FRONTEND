import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slices/homeSlice';
import fileReducer from './slices/fileSlice';
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";

export const store = configureStore({
    reducer: {
        home: homeReducer,
        file: fileReducer,
        auth: authReducer,
        profile: profileReducer
    },
});
