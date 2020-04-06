import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class app extends Component {

  constructor(props) {
    super(props);
  }
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
    const style = {
      display: 'block',
      margin: '1% auto',
      padding: '4px 12px',
      backgroundColor: 'green',
      color: 'white'
    };

    let persons = null;

    if (this.state.displayPersons) {
      persons = (
        <div>
        {this.state.persons.map((person,index) => {
          return <Person
            clicked={() => this.deletePersonHandle(index)} 
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
        })}
      </div>
      );
      style.backgroundColor = 'red';
    } 
    const classes = [];
  
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('danger');
    }
    return (
      <div className="App">
        <h1 className={classes.join(' ')}>We have {this.state.persons.length} person(s) onboard!</h1>
        <button style={style} onClick={this.togglePersonHandle}>Toggle</button>
        {persons}
      </div>
    )
  };
}

export default app;