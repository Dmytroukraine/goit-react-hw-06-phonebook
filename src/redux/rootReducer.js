// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contacts-slice';
import filterReducer from '../redux/filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
