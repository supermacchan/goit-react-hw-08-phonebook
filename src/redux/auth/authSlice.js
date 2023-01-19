import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from './authOperations';
import { toast } from "react-toastify";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            toast.success(`Welcome, ${state.user.name}!`);
        },
        [authOperations.register.pending](state, action) {
            return state;
        },
        [authOperations.register.rejected](state, action) {
            console.log(action.error.message);
            if (action.error.message === "Rejected") {
                toast.error('Registration error: please check the entered data and try again.');
            }
        },

        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            toast.success(`Welcome back, ${state.user.name}!`);
        },
        [authOperations.logIn.pending](state, action) {
            return state;
        },
        [authOperations.logIn.rejected](state, action) {
            console.log(action.error.message);
            if (action.error.message === "Rejected") {
                toast.error('Authorization error: incorrect email or password.');
            }
        },

        [authOperations.logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.logOut.pending](state, action) {
            return state;
        },
        [authOperations.logOut.rejected](state, action) {
            console.log(action.error.message);
        },

        [authOperations.refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [authOperations.refreshCurrentUser.pending](state, action) {
            state.isRefreshing = true;
        },
        [authOperations.refreshCurrentUser.rejected](state, action) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlice.reducer;