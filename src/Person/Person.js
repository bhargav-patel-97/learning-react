import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {

    const style = {
        '@media (max-width: 500px)': {
            width: '450px',
            margin: '20 auto',
            
        }
    };
    return (
    <div className='Person' style={style}>
        <p>I am {props.name} and I'm {props.age} years old.</p>
        <p>{props.children}</p>
        <input className="input-field" type="text" onChange={props.changed}/>
        <button className="remove-btn" onClick={props.clicked}></button>
    </div>
    );
};

export default Radium(person);