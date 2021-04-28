import React, { Component } from 'react';
import shortid from 'shortid';
// import ContactsForm from './components/ContactsForm';
import Container from './components/Container';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: shortid.generate(),
      name,
    };
    console.log(contact);

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleChange = event => {
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
    this.setState({ name: event.currentTarget.value });
    console.log({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.onSubmit(this.state.name);
    this.addContact(this.state.name);
    this.setState({ name: '' });
  };

  // formSubmitData = data => {
  //   console.log(data);
  // };

  render() {
    return (
      <Container>
        <h1>PhoneBook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </Container>
    );
  }
}

export default App;
