import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
    name: "editor",
    initialState: {
        language: "javascript",
        code: "",
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setCode: (state, action) => {
            state.code = action.payload;
        },
    },
});

export const { setLanguage, setCode } = editorSlice.actions;
export default editorSlice.reducer;
