import React from 'react';
import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts} from 'redux/selectors';

const ContactList = () => {

const contacts = useSelector(getFilteredContacts)

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} number={number} name={name} />
      ))}
    </List>
  );
};




export default ContactList;

