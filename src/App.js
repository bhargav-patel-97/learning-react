import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bhargav', age: 22 },
      { name: 'Nihar', age: 20 },
      { name: 'Abhi', age:19 }
    ]
  }

  switchNameHandler = () => {
    //DONT DO THIS this.state.persons[0] = 'Bhargav Patel';
    // INSTEAD, USE setState METHOD
    this.setState({
      persons: [
        { name: 'Pratik', age: 22 },
        { name: 'Arjun', age: 21 },
        { name: 'Hit', age:22 }
      ]
    });
    } 

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby is JavaScript</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?',));
  }
}

export default App;
