import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const register = createAsyncThunk(
    "auth/register",
    async (credentials) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            // token.set(data.token);
            return data;
        } catch (error) {
            console.log(error);
            // добавить обработку ошибки
        }
    }
);

export const authOperations = {
    register,
}