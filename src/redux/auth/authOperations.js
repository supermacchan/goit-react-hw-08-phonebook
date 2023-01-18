import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { redirect } from "react-router-dom";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

const register = createAsyncThunk(
    "auth/register",
    async (credentials) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            // redirect("/");
            return data;
        } catch (error) {
            console.log(error);
            // добавить обработку ошибки
        }
    }
);

const logIn = createAsyncThunk(
    "auth/login",
    async (credentials) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            // redirect("/");
            return data;
        } catch (error) {
            console.log(error);
            // добавить обработку ошибки
        }
    }
);

const logOut = createAsyncThunk(
    "auth/logout",
    async () => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            console.log(error);
            // добавить обработку ошибки
        }
    }
);

export const authOperations = {
    register,
    logIn,
    logOut
}