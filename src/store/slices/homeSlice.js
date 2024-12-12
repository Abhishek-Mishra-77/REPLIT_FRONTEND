import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpenFolderModal: false,
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        openOrCloseFolderModal(state) {
            state.isOpenFolderModal = !state.isOpenFolderModal
        },

    }
})


export const { openOrCloseFolderModal } = homeSlice.actions;

export default homeSlice.reducer;