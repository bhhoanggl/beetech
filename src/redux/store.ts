import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, languageReducer);

const store = configureStore({
    reducer: {
        language: persistedReducer,
    },
});

export const persistor = persistStore(store);
export default store;
