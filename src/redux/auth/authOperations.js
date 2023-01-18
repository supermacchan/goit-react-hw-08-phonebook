import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
            return data;
        } catch (error) {
            console.log(error);
            // добавить обработку ошибки
        }
    }
);

export const authOperations = {
    register,
    logIn
}