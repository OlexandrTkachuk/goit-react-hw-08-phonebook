// system
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';

// components
import ContactList from 'components/PhonebookComponent/ContactList/ContactList';
import Filter from 'components/PhonebookComponent/Filter/Filter';
import PhonebookForm from 'components/PhonebookComponent/PhonebookForm/PhonebookForm';
import Section from 'components/Section/Section';
import LoadingSpinner from 'components/Loading/LoadingSpinner';

// styles
import { HomeTitle } from './Home';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HomeTitle>Contacts Page</HomeTitle>

      <Section title="Phonebook Form">
        <PhonebookForm />
      </Section>

      <Section title="Filter">
        <Filter />
      </Section>

      {isLoading && <LoadingSpinner />}

      {error ? (
        <Section title="Error">
          <div style={{ textAlign: 'center', fontSize: 24 }}>{error}</div>
        </Section>
      ) : (
        <Section title="Contact List">
          <ContactList />
        </Section>
      )}
    </>
  );
};

export default Contacts;
