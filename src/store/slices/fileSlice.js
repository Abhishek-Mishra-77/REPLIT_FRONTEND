import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
    name: "files",
    initialState: {
        currentFile: "",
        fileStructure: [],
    },
    reducers: {
        setCurrentFile: (state, action) => {
            state.currentFile = action.payload;
        },
        setFileStructure: (state, action) => {
            state.fileStructure = action.payload;
        },
    },
});

export const { setCurrentFile, setFileStructure } = fileSlice.actions;
export default fileSlice.reducer;
