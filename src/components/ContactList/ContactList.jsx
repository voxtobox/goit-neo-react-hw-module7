import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.list}>
      {filteredContacts.map(item => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </div>
  );
}
