import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
state = {
    persons: [
      { name: 'Person 1', age: 22, id:0 },
      { name: 'Person 2', age: 20, id:1 },
      { name: 'Person 3', age:19, id:2 }
    ],
    displayPersons: false
  }

    deletePersonHandle = (index) => {
      const persons = this.state.persons.slice();
      persons.splice(index,1);
      this.setState({persons:persons});
    }

    togglePersonHandle = () => {
      const display = this.state.displayPersons;
      this.setState({displayPersons: !display});
    }

    nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({persons: persons});
    }

  render () {

    let persons = null;


    if (this.state.displayPersons) {
      persons = <Persons 
       persons={this.state.persons}
       onClick={this.deletePersonHandle}
       changed={this.nameChangeHandler}/>;
    } 
   
    return (
        <WithClass classes={styles.App}>
        <Cockpit
        title = {this.props.title}
        showPersons = {this.state.showPersons}
        personsLength = {this.state.persons.length}
        clicked = {this.togglePersonHandle} />
        {persons}
        </WithClass>
    )
  };
}

export default App;