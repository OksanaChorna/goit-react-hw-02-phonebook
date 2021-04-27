import React, { Component } from "react";
import Container from './components/Container';

class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  handleInputChange = event => {
// console.log(event.target.value)
    this.setState({ name: event.target.value })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

  }

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
          <ul><li></li></ul>
        </div>

        </Container>
    )
  }
  
}

export default App;
