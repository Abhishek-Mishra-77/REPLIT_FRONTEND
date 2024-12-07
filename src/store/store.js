import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slices/homeSlice';
import fileReducer from './slices/fileSlice';
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        home: homeReducer,
        file: fileReducer,
        auth: authReducer
    },
});
