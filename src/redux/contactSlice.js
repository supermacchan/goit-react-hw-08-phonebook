import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { toast } from 'react-toastify';
import { fetchContacts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },

  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       const contactsNames = state.items.map(contact => contact.name);
  //       if(contactsNames.includes(action.payload.name)) {
  //         toast.error(`${action.payload.name} is already in contacts.`);
  //         return;
  //       }
  //       state.items.unshift(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.items.findIndex(contact => contact.id === action.payload);
  //     state.items.splice(index, 1);
  //   },
  // },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const contactsNames = state.items.map(contact => contact.name);
      if(contactsNames.includes(action.payload.name)) {
        toast.error(`${action.payload.name} is already in contacts.`);
        return;
      }
      state.items.unshift(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  }
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;