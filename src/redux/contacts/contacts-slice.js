// contacts-slice.js залишаємо без змін, видаляємо перевірку та алерт
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (store, { payload }) => {
      store.push({ ...payload, id: nanoid() });
    },
    deleteContact: (store, { payload }) => store.filter((item) => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
