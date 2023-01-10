import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63bd96dabc99130c6cf784db.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async () => {
        const response = await axios.get("/contacts");
        return response.data;
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact) => {
        const response = await axios.post(contact);
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId) => {
        const response = await axios.delete(contactId);
    }
);