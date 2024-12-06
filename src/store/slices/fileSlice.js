import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    files: [],
}

const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        addFileHandler(state, action) {
            state.folders.push(action.payload)
        },
        removeFileHandler(state, action) {
            state.folders = state.folders.filter((folder) => folder.id !== action.payload)
        },
        updateFileHandler(state, action) {
            state.folders = state.folders.map((folder) => {
                if (folder.id === action.payload.id) {
                    return { ...folder, name: action.payload.name }
                }
                return folder;
            });
        }
    }
})


export const { addFileHandler, removeFileHandler, updateFileHandler } = fileSlice.actions;

export default fileSlice.reducer;