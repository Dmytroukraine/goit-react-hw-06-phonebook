// store.js
import { configureStore, createAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from '../Redux/contactsSlice';

// Створюємо серіалізовану дію для register
export const registerAction = createAction('register');

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
