import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Finder } from './Finder/Finder';
import { IoListCircleOutline } from 'react-icons/io5';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = contact => {
    const contactItem = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    for (const contact of this.state.contacts) {
      if (contact.name === contactItem.name) {
        window.alert(`${contactItem.name} is already in contacts.`);
        return;
      }
    }

    this.setState(({ contacts }) => ({
      contacts: [contactItem, ...contacts],
    }));
  };

  handleFilterChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="conteiner">
        <h1 className="mainTitle">
          Ph
          <IoListCircleOutline className="titleIcon" />
          nebook
        </h1>
        <Form onSubmit={this.addNewContact} />

        <h3 className="finderTitle">Find contacts by name</h3>
        <Finder filter={filter} onChange={this.handleFilterChange} />

        <h2 className="contactsTitle">Contacts</h2>
        <ContactsList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
