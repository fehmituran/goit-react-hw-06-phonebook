import React from 'react';
import { Form, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value))
  }


  return (
    <Form>
   
        <Input
          type="name"
          value={filter}
          onChange={handleChange}
          placeholder="Find contacts by name"
        />
  
    </Form>
  );
};



export default Filter;
