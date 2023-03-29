import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledForm,
  StyledInput,
  StyledFormBtn,
} from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  onAddContact = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget;

    this.props.createContact({
      name: name.value,
      number: number.value,
    });
    e.currentTarget.reset();
  };
  render() {
    return (
      <StyledForm onSubmit={this.onAddContact}>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <StyledFormBtn type="submit">Add Contact</StyledFormBtn>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};
