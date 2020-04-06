import React from 'react';
import './Person.css';
const person = (props) => {
    return (
    <div className='Person'>
        <p>I am {props.name} and I'm {props.age} years old.</p>
        <p>{props.children}</p>
        <input className="input-field" type="text" onChange={props.changed}/>
        <button className="remove-btn" onClick={props.clicked}></button>
    </div>
    );
};

export default person;