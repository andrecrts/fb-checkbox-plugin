import React, { Component } from 'react';
import logo from './logo.svg';
import MessengerPlugin from 'react-messenger-checkbox-plugin';
import './App.css';

class App extends Component {
  render() {
    return (
        <MessengerPlugin
            type="fb-messenger-checkbox"
      appId="1161293877241041"
      pageId="1192073607549305"
      passthroughParams="WQWQQEW"
      prechecked="true"
      allow_login="true"
        />
    );
  }
}

export default App;
