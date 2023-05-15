import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { form, formLabel, submitBtn, formInput } = css;

    return (
      <form onSubmit={this.handleSubmit} className={form}>
        <label className={formLabel}>
          Name
          <input
            type="text"
            name="name"
            className={formInput}
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={formLabel}>
          Number
          <input
            type="tel"
            name="number"
            className={formInput}
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
