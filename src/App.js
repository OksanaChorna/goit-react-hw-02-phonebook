import React, { Component } from 'react';
import shortid from 'shortid';
// import ContactsForm from './components/ContactsForm';
import Container from './components/Container';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // }; // 1.47 vebinar 3, на кнопку Видалити

  findContact = () => {
    const { filter, contacts } = this.state;

    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
      );
    } else {
      return contacts;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };
    this.addContact(contact);
    this.setState({ name: '', number: '' }); //reset
  };

  // formSubmitData = data => {
  //   console.log(data);
  // };

  render() {
    const { name, number, filter } = this.state;

    return (
      <Container>
        <h1>PhoneBook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            {/* id зробити */}
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            {/* id зробити */}
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts by name</h3>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
          <ul>
            {this.findContact().map(({ id, name, number }) => {
              return (
                <li key={id}>
                  {name}: {number}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    );
  }
}

export default App;
