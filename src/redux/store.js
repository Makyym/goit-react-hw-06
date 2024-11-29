import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

const persistContactsConfig = {
    key: 'contacts',
    version: 1,
    storage,
};

const persistedContactReducer = persistReducer(persistContactsConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);

// const persistContactsConfig = {
//     key: 'contacts',
//     version: 1,
//     storage,
//     whitelist: ['contacts.items'],
// };