import { createSlice } from "@reduxjs/toolkit";

/* -------------------------------------------------------------------------- */
/*                             AUTH SLICE                                     */
/* -------------------------------------------------------------------------- */

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: localStorage.getItem("token") ? true : false,
        userDetails: JSON.parse(localStorage.getItem("userDetails")) || null,
        token: localStorage.getItem("token") || "",
        loading: false,
        error: null,
    },
    reducers: {
        loginHandler(state, action) {
            const { user, token } = action.payload;
            state.isLogin = true;
            state.userDetails = user;
            state.token = token;

            localStorage.setItem("token", token);
            localStorage.setItem("userDetails", JSON.stringify(user));

        },
        logout(state) {
            state.isLogin = false;
            state.userDetails = null;
            state.token = null;

            localStorage.removeItem("token");
            localStorage.removeItem("userDetails");
        },
    }
});

export const { logout, loginHandler } = authSlice.actions;
export default authSlice.reducer;
