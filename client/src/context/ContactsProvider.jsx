import React,{useContext, useState} from 'react';
import { UseAuth } from './Auth';

const ContactsContext = React.createContext();


export function ContactsProvider({children}){
    const [auth] = UseAuth();
    const [contacts, SetContacts] = useState(auth?.user?.contacts)
  return (
    <ContactsContext.Provider>
      {children}
    </ContactsContext.Provider>
  )
};

