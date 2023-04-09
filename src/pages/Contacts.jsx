// components
import ContactList from 'components/PhonebookComponent/ContactList/ContactList';
import Filter from 'components/PhonebookComponent/Filter/Filter';
import PhonebookForm from 'components/PhonebookComponent/PhonebookForm/PhonebookForm';
import Section from 'components/Section/Section';

const Contacts = () => {
  return (
    <>
      <Section title="Phonebook Form">
        <PhonebookForm />
      </Section>

      <Section title="Filter">
        <Filter />
      </Section>

      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
  );
};

export default Contacts;
