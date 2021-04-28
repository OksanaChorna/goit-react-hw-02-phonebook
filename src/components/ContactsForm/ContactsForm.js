import React, { Component } from 'react';
// import PropsType from 'prop-types';
// import style from './ContactsForm.module.css';
import shortid from 'shortid';

class ContactsForm extends Component {
  initialState = {
    contacts: [],
    name: '',
  };

  state = {
    // contacts: [],
    name: '',
  };

  nameInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);

    this.reset();
  };

  reset = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
