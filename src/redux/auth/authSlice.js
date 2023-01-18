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
            
        },
        [authOperations.register.pending](state, action) {
            
        },
        [authOperations.register.rejected](state, action) {
            
        }
    },
});

export const authReducer = authSlice.reducer;