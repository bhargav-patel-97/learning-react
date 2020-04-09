import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
state = {
    persons: [
      { name: 'Person 1', age: 22, id:0 },
      { name: 'Person 2', age: 20, id:1 },
      { name: 'Person 3', age:19, id:2 }
    ],
    displayPersons: false,
    authenticated: false
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

    loginHandler= () => {
      this.setState({authenticated: true});
    };

  render () {

    let persons = null;


    if (this.state.displayPersons) {
      persons = <WithClass classes={styles.Persons}>
      <Persons 
       persons={this.state.persons}
       onClick={this.deletePersonHandle}
       changed={this.nameChangeHandler}/>
       </WithClass>;
    } 
   
    return (
        <WithClass classes={styles.App}>
          <AuthContext.Provider 
            value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
            }}
          >
            <Cockpit
              title = {this.props.title}
              showPersons = {this.state.showPersons}
              personsLength = {this.state.persons.length}
              clicked = {this.togglePersonHandle}
              />
              {persons}
          </AuthContext.Provider>
        </WithClass>
    )
  };
}

export default App;