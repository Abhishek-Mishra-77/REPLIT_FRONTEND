import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpenFolderModal: false,
    folders: [],
    folder: null
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        openOrCloseFolderModal(state) {
            state.isOpenFolderModal = !state.isOpenFolderModal
        },
        addFolderHandler(state, action) {
            state.folders.push(action.payload)
        },
        removeFolderHandler(state, action) {
            state.folders = state.folders.filter((folder) => folder.id !== action.payload)
        },
        updateFolderHandler(state, action) {
            const selectedFolder = state.folders.find((folder) => folder.id === action.payload.id);
            if (selectedFolder) {
            }
        }
    }
})


export const { openOrCloseFolderModal, removeFolderHandler, addFolderHandler, updateFolderHandler } = homeSlice.actions;

export default homeSlice.reducer;