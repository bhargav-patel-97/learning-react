import React from 'react';
import styles from './Person.css';
import AuthContext from '../../../context/auth-context';

const person = (props) => {

    return (
        <AuthContext.Consumer>
            {(context) =>
                context.authenticated ? <h2>Authenticated!</h2> : <h2>Please Log in </h2>
            }
            <div className={styles.Person}>
                <p>I am {props.name} and I'm {props.age} years old.</p>
                <p>{props.children}</p>
                <input className={styles.inputField} type="text" onChange={props.changed}/>
                <button className={styles.removeBtn} onClick={props.clicked}></button>
            </div>
        </AuthContext.Consumer>
    );
};

export default person;