import Header from './Header/Header';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
 
 const contacts = useSelector(getContacts);
  
  return (
    <div>
      <Header />
      <Section title="Phone Book">
        <ContactForm />
      </Section>
      <Section title="Contacts">
      {contacts.length > 0 ? (
          <>
          <Filter/>
          <ContactList
          />
          </>
        ): (<Notification message="Contact list is empty" />)}
        </Section>
    </div>
  );
};
