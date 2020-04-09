import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
componentDidMount() {
  document.querySelector('input').focus();
}
  render() {
    return this.props.persons.map( (person,index) => { 
      return (  
        <Person
        clicked={() => this.props.onClick(index)} 
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
      );
    });
  } 
}

export default Persons; 
