import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <ContactsItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape().isRequired),
  onDelete: PropTypes.func.isRequired,
};
