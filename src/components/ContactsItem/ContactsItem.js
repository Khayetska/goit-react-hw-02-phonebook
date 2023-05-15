import PropTypes from 'prop-types';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './ContactsItem.module.css';

export const ContactsItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={css.contactsItem}>
      <FaPhoneAlt className={css.contactsIcon} />
      {name}: {number}
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
