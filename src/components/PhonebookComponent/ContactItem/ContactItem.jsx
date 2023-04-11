// system
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

// styles
import { Button, Item, Text } from './ContactItem.styleed';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Item>
        <Text>{name}</Text>
        <p>{number}</p>
        <Button type="button" onClick={handleDelete}>
          X
        </Button>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
