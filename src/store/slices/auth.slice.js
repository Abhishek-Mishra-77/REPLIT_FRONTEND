import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    userDetails: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
})