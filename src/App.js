import React, { Component } from 'react';
import logo from './logo.svg';
import MessengerPlugin from 'react-messenger-checkbox-plugin';
import './App.css';

class App extends Component {

    onClick = () => {
        console.log(this.name);
         this.checkBox.send('asdfasf_asdfa');
  }
  render() {
    return (
        <div>
            <label>
          COdigo de reservacion:
          <input type="text" value={this.pnr} onChange={this.handleChange} />
      </label>
      <label>
          Apellido:
          <input type="text" value={this.name} onChange={this.handleChange} />
        </label>
        <MessengerPlugin
            type="fb-messenger-checkbox"
          appId="1161293877241041"
          pageId="362430908370"
          prechecked="true"
          allow_login="true"
          onRef={ref => (this.checkBox = ref)}
  />
    <button onClick={this.onClick}>MessengerPlugin.send()</button>

  </div>
    );
  }
}

export default App;
