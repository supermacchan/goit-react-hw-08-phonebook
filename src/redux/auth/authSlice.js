import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from './authOperations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.register.pending](state, action) {
            
        },
        [authOperations.register.rejected](state, action) {
            
        },

        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.pending](state, action) {
            
        },
        [authOperations.logIn.rejected](state, action) {
            
        },

        [authOperations.logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.logOut.pending](state, action) {
            
        },
        [authOperations.logOut.rejected](state, action) {
            
        },
    },
});

export const authReducer = authSlice.reducer;