import React from 'react';
import styles from './Person.css';
const person = (props) => {

    return (
    <div className={styles.Person}>
        <p>I am {props.name} and I'm {props.age} years old.</p>
        <p>{props.children}</p>
        <input className={styles.inputField} type="text" onChange={props.changed}/>
        <button className={styles.removeBtn} onClick={props.clicked}></button>
    </div>
    );
};

export default person;