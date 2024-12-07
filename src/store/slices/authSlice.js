import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAsyn = createAsyncThunk('auth/login', async ({ email, password, name = "Abhishek", role = "admin" }, thunkAPI) => {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/auth/login`, { email, password, name, role })

        console.log(response);
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: !JSON.parse(localStorage.getItem('token')),
        userDetails: JSON.parse(localStorage.getItem('userDetails')) || null,
        token: JSON.parse(localStorage.getItem('token')),
        loading: false,
        error: null
    },
    reducers: {
        logout(state) {
            state.isLogin = false;
            state.userDetails = null;
            state.token = null;

            localStorage.removeItem("token");
            localStorage.removeItem('userDetails');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsyn.pending, (state) => {
            state.loading = true;
            state.error = null
        })
            .addCase(loginAsyn.fulfilled, (state, action) => {
                const { user, token } = action.payload;

                state.loading = false;
                state.isLogin = true;
                state.userDetails = user;
                state.token = token

                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('userDetails', JSON.stringify(user));
            })
            .addCase(loginAsyn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;