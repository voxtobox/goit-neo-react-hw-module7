import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps.js';
import css from './Contact.module.css';
import IconPhone from '../../assets/IconPhone.jsx';
import IconContact from '../../assets/IconContact.jsx';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(deleteContact(id));
  }

  return (
    <div className={css.container}>
      <div className={css.infoBar}>
        <div className={css.info}>
          <IconContact />
          <span className={css.text}>{name}</span>
        </div>
        <div className={css.info}>
          <IconPhone />
          <span>{number}</span>
        </div>
      </div>
      <button type="button" className={css.button} onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}
