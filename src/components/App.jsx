// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/store';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import style from './App.module.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1 className={style.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={style.title}>Contacts</h2>
          <div className={style.contact_list_container}>
            <Filter />
            <ContactList />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
