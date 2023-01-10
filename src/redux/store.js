import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filtersReducer } from "./filterSlice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
