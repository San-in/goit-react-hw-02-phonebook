import { Component } from 'react';
import React from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList ';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createContact = newItem => {
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === newItem.name.toLowerCase()
    )
      ? alert(`${newItem.name} is already in contacts.`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newItem],
          };
        });
  };

  onFindInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  createFilteredList = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  deleteContact = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h3>Phonebook</h3>
        <ContactForm createContact={this.createContact} />
        <h3>Contacts</h3>
        <Filter onFindInput={this.onFindInput} />
        <ContactList
          contactsList={this.state.filter ? this.createFilteredList() : []}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
