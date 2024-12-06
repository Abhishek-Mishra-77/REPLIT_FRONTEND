import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpenFolderModal: false,
    folders: [],
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
            state.folders = state.folders.map((folder) => {
                if (folder.id === action.payload.id) {
                    return { ...folder, name: action.payload.name }
                }
                return folder;
            });
        }
    }
})


export const { openOrCloseFolderModal, removeFolderHandler, addFolderHandler, updateFolderHandler } = homeSlice.actions;

export default homeSlice.reducer;