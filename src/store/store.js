import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slices/homeSlice';
import fileReducer from './slices/fileSlice';

export const store = configureStore({
    reducer: {
        home: homeReducer,
        file: fileReducer
    },
});
