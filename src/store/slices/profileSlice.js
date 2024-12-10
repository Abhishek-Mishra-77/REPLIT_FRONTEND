import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: { isOpenProfileModal: false },
    reducers: {
        openProfileModal: (state) => {
            state.isOpenProfileModal = !state.isOpenProfileModal
        },
    }
})


export const { openProfileModal } = profileSlice.actions;

export default profileSlice.reducer;