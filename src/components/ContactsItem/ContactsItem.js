import PropTypes from 'prop-types';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './ContactsItem.module.css';

export const ContactsItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  const { contactsIcon, contactsItem, deleteBtn } = css;
  return (
    <li className={contactsItem}>
      <FaPhoneAlt className={contactsIcon} />
      {name}: {number}
      <button className={deleteBtn} onClick={() => onDelete(id)}>
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
