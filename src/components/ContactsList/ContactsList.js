import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
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
