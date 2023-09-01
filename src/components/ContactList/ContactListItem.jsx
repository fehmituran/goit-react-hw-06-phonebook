import React from 'react';
import { Item, Name, Number, Button } from './ContactList.styled';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`${name} is removed`);
  };

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button type="button">
        <FiTrash2 size={25} onClick={handleDelete} />
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
