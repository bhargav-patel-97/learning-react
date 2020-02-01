import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          Hi! I am Bhargav Patel.
        </p>
        <Person name="Bhargav" age="22"/>
        <Person name="Nihar" age="20"/>
        <Person name="Abhi" age="19"/>
      </div>
    );
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?',));
  }
}

export default App;
