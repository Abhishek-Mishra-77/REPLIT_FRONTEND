import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../services/common";


export const loginAsyn = createAsyncThunk(
    "auth/login",
    async (userDetails, thunkAPI) => {
        try {
            console.log(serverUrl)
            const response = await axios.post(`${serverUrl}/auth/login`, userDetails);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || error.message
            );
        }
    }
);

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
        logout(state) {
            state.isLogin = false;
            state.userDetails = null;
            state.token = null;

            try {
                localStorage.removeItem("token");
                localStorage.removeItem("userDetails");
            } catch (e) {
                console.error("Failed to remove from localStorage:", e);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsyn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsyn.fulfilled, (state, action) => {
                const { user, token } = action.payload;

                state.loading = false;
                state.isLogin = true;
                state.userDetails = user;
                state.token = token;

                try {
                    localStorage.setItem("token", token);
                    localStorage.setItem("userDetails", JSON.stringify(user));
                } catch (e) {
                    console.error("Failed to save to localStorage:", e);
                }
            })
            .addCase(loginAsyn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;

export const selectIsLogin = (state) => state.auth.isLogin;
export const selectUserDetails = (state) => state.auth.userDetails;
export const selectAuthToken = (state) => state.auth.token;

export default authSlice.reducer;
