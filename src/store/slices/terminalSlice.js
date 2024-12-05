import { createSlice } from "@reduxjs/toolkit";

const terminalSlice = createSlice({
    name: "terminal",
    initialState: {
        output: "",
    },
    reducers: {
        setOutput: (state, action) => {
            state.output = action.payload;
        },
        clearOutput: (state) => {
            state.output = "";
        },
    },
});

export const { setOutput, clearOutput } = terminalSlice.actions;
export default terminalSlice.reducer;
