import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Bhargav', age: 22 },
      { name: 'Nihar', age: 20 },
      { name: 'Abhi', age:19 }
    ]
  });

  const switchNameHandler = () => {
    //DONT DO THIS this.state.persons[0] = 'Bhargav Patel';
    // INSTEAD, USE setState METHOD
    setPersonsState({
      persons: [
        { name: 'Pratik', age: 22 },
        { name: 'Arjun', age: 21 },
        { name: 'Hit', age:22 }
      ]
    });
    };

    const handleChange = (event) => {
      setPersonsState({
        persons: [
          { name: 'Pratik', age: 22 },
          { name: event.target.value, age: 21 },
          { name: 'Hit', age:22 }
        ]
      });
    };

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button className="Button" onClick={switchNameHandler}>Switch Names</button>
        
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        change={handleChange}
        />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
}

export default app;