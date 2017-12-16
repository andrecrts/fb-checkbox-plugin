import React, { Component } from 'react';
import logo from './logo.svg';
import MessengerPlugin from 'react-messenger-checkbox-plugin';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', pnr:''};
    this.checkBox= null;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    console.log(event);
    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    alert(`Gracias, en breve recibiras confirmacion`);
    this.checkBox.send(`${this.state.pnr}_${this.state.name}`);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Codigo de reservacion:
            <input type="text" value={this.state.pnr} name="pnr" onChange={this.handleInputChange} />
          </label>
          <label>
            Apellido:
            <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
          </label>

          <br/><br/>
          <MessengerPlugin
              type="fb-messenger-checkbox"
            appId="1161293877241041"
            pageId="362430908370"
            prechecked="true"
            allow_login="true"
            onRef={ref => (this.checkBox = ref)}
          />
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
