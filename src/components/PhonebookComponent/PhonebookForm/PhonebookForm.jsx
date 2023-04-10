// system
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlise';

import { Notify } from 'notiflix';
import { Button, Form, FormInput, FormWrapper } from './PhonebookForm.styled';
import { nanoid } from '@reduxjs/toolkit';

const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'phone') {
      setPhone(value);
    }
  };

  const clearForm = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      phone,
    };

    const alreadyExists = contacts.findIndex(item => {
      const name = item.name.toLowerCase();
      const newName = contact.name.toLowerCase();
      return name === newName;
    });

    if (alreadyExists >= 0) {
      Notify.failure(`${contact.name} is already added to contact list`);
    } else {
      dispatch(addContact(contact));
    }

    clearForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormWrapper>
        <FormInput
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />

        <FormInput
          type="tel"
          name="phone"
          value={phone}
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
        />
      </FormWrapper>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default PhonebookForm;
