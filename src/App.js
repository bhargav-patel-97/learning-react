import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class app extends Component {

state = {
    persons: [
      { name: 'Bhargav', age: 22 },
      { name: 'Nihar', age: 20 },
      { name: 'Abhi', age:19 }
    ],
    displayPersons: false
  }

    handleChange = (event) => {
      this.setState({
        persons: [
          { name: 'Pratik', age: 22 },
          { name: event.target.value, age: 21 },
          { name: 'Hit', age:22 }
        ]
      });
    }

    togglePersonHandle = () => {
      const display = this.state.displayPersons;
      this.setState({displayPersons: !display});
    }

  render () {
    
    let persons = null;

    if (this.state.displayPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            change={this.handleChange}
          />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      )
    } 

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button className="Button" onClick={this.togglePersonHandle}>Toggle</button>
        {persons}
      </div>
    )
  };
}

export default app;