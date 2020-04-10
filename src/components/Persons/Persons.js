import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';
import WIthClass from '../../hoc/WithClass';

class Persons extends PureComponent {

static contextType = AuthContext;

componentDidMount() {
  document.querySelector('input').focus();
  console.log(this.context.authenticated);
}

  render() {
    return this.props.persons.map( (person,index) => { 
      return ( 
        <WIthClass>
          {
            this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in </p>
          }
          <Person
            clicked={() => this.props.onClick(index)} 
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} 
          />
        </WIthClass>
      );
    });
  } 
}

export default Persons; 
