import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { toast } from 'react-toastify';
import { fetchContacts } from "./operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },

  reducers: {
    addContact: {
      reducer(state, action) {
        const contactsNames = state.items.map(contact => contact.name);
        if(contactsNames.includes(action.payload.name)) {
          toast.error(`${action.payload.name} is already in contacts.`);
          return;
        }
        state.items.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }