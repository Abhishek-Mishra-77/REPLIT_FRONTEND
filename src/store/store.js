import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./slices/editorSlice";
import fileReducer from "./slices/fileSlice";
import terminalReducer from "./slices/terminalSlice";

export const store = configureStore({
    reducer: {
        editor: editorReducer,
        files: fileReducer,
        terminal: terminalReducer,
    },
});
