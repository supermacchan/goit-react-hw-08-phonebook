import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filtersReducer } from "./filterSlice";
import { authReducer } from "./auth/authSlice";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
    stateReconciler: autoMergeLevel2,
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
        auth: authPersistedReducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        })
});

export const persistor = persistStore(store);
