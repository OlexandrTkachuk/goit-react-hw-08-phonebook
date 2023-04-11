// system
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';

// components
import ContactItem from '../ContactItem/ContactItem';

// styles

import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
